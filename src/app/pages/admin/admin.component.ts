import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SessionDialogComponent } from 'src/app/components/session-dialog/session-dialog.component';
import { FormationService } from 'src/app/core/services/formation.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent  implements OnInit{

  sessions: any[] = [];
  constructor(private dialog: MatDialog,
    private formationService: FormationService){ }
  ngOnInit(): void {
   this.loadData();
  }

  loadData(){
    this.formationService.getSession()
    .subscribe(res => {
     res.map(d => this.sessions.push(d));
    })
  }
  openDialog(){
    let dialogRef = this.dialog.open(SessionDialogComponent, {
      width: '60vw',
      minHeight: '300px'
    });

    dialogRef.afterClosed().subscribe(res =>{
      //this.loadData();
    })
  }



  delete(id: string){
    if(confirm("Etes-vous sûr(e) de vouloir supprimer")){
      this.formationService.deleteSession(id)
      .then( res => {
       window.location.reload();
      })
    }

  }

}
