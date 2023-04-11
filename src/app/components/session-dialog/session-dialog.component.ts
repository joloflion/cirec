import { DialogRef } from '@angular/cdk/dialog';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormationService } from 'src/app/core/services/formation.service';
import { UploadImageService } from 'src/app/core/services/upload-image.service';

@Component({
  selector: 'app-session-dialog',
  templateUrl: './session-dialog.component.html',
  styleUrls: ['./session-dialog.component.scss']
})
export class SessionDialogComponent {



  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];
  url: string = "";
  previewUrls: string [] = [];
  fileInfos?: Observable<any>;
  loading: boolean = false;
  startv!: string;
  endv!: string;
  name!: string;


  constructor(
    private uploadService: UploadImageService,
    public dialogRef: DialogRef<SessionDialogComponent>,
     private formationService: FormationService) { }


  ngOnInit(){
    this.fileInfos = this.uploadService.getFiles();
  }

  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
    this.uploadFiles();
  }

  uploadFiles(): void {
    this.message = [];

    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.uploadFirestore(i, this.selectedFiles[i]);
      }
    }
  }

  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };

    if (file) {
      this.uploadService.upload(file).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            const msg = 'Uploaded the file successfully: ' + file.name;
            this.message.push(msg);
            this.fileInfos = this.uploadService.getFiles();
          }
        },
        (err: any) => {
          this.progressInfos[idx].value = 0;
          const msg = 'Could not upload the file: ' + file.name;
          this.message.push(msg);
          this.fileInfos = this.uploadService.getFiles();
        });
    }
  }

  uploadFirestore(idx: number, file: File): void{
    this.loading = true;
    const reader = new FileReader();
     if(file){
      reader.readAsDataURL(file);
      reader.onload = () =>{
        let src = reader.result as string;
        this.previewUrls.push(src)
      }
    this.uploadService.uploadToFirestore(file, `products/${file.name}`)
      .subscribe(snp => {
      if(snp?.state === 'success'){
        snp?.ref.getDownloadURL()
        .then(url => {
          this.url = url;
          this.name = file.name;
          this.loading = false;
          return url;

        })
        .catch((error) => this.loading = false)
      }


      }, err => this.loading = false)

     }
  }

  start(value: any){
    this.startv = value.target?.value;
  }

  end(value: any){
    this.endv = value.target?.value;
  }

  submit(){
    this.formationService.saveSession({
      start: this.startv,
      end: this.endv,
      url: this.url
   }).then(res =>{
    console.log(res);
    this.dialogRef.close();
    window.location.reload();
   })
  }
}
