import { Component } from '@angular/core';
import { FormationService } from 'src/app/core/services/formation.service';

@Component({
  selector: 'app-session-page',
  templateUrl: './session-page.component.html',
  styleUrls: ['./session-page.component.scss']
})
export class SessionPageComponent {

  candidats: any[] = [];
  constructor(private formationService: FormationService){
     formationService.getCand()
     .subscribe(res => {
      res.docs.map(d => this.candidats.push(d.data()));
     })
  }
}
