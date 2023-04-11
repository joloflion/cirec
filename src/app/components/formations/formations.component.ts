import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/app/core/services/formation.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {

  formations: any[] = [
    {
      name: "CERTIFICAT ELEMENTAIRE COMPTABLE"
    },
    {
      name: "PRATIQUE COMPTABLE ET FISCALE (NIVEAU 1)"
    },
    {
      name: "PRATIQUE COMPTABLE ET FISCALE APPROFONDIE(NIVEAU 2)"
    }
  ];
  constructor(private formation: FormationService){

  }


  ngOnInit(): void {

  }
}
