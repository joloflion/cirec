import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from 'src/app/core/services/formation.service';

@Component({
  selector: 'app-session-en-court',
  templateUrl: './session-en-court.component.html',
  styleUrls: ['./session-en-court.component.scss']
})
export class SessionEnCourtComponent {

  session: any;
  constructor(private route: ActivatedRoute, private formation: FormationService){
    this.formation.getSession().subscribe(d => {
      this.session = d[0];
     })
  }


}
