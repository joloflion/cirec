import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Formation } from 'src/app/core/models/formation';
import { FormationService } from 'src/app/core/services/formation.service';
import { ToastService, TOAST_STATE } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-formation-form',
  templateUrl: './formation-form.component.html',
  styleUrls: ['./formation-form.component.scss']
})
export class FormationFormComponent  implements OnInit {
 @Input() formation!: Formation;

 inscriptionForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private formService: FormationService,
    private toast: ToastService){
      this.inscriptionForm = this.fb.group({
        name:      ['', Validators.required],
        email:     ['', Validators.required, Validators.email],
        phone:     ['', Validators.required, Validators.minLength(9)],
        message:   ['', Validators.required],
        formation: ['']
      })
    }

  ngOnInit(): void {

  }



  subscribe(){

     this.inscriptionForm.get('formation')?.setValue(this.formation);
    console.log(this.inscriptionForm.value)

      this.formService.subscribe(this.inscriptionForm.value)
      .then(res => {
        this.inscriptionForm.reset();
       this.toast.showToast(TOAST_STATE.success,"Votre inscription a été envoyer avec succès. CIREC vous contactera pour plus d'information");
       this.dismiss();

      })
      .catch(error => {
        this.toast.showToast(TOAST_STATE.danger,"Désolé ! une erreur vient de se produire ressayer plus tard");
        this.dismiss();
      })

  }


  dismiss(){
    setTimeout(() => this.toast.dismissToast(), 5000)
  }

}
