import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from 'src/app/core/models/formation';
import { FormationService } from 'src/app/core/services/formation.service';

@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.scss']
})
export class FormationDetailsComponent implements OnInit {



  formation: Formation  | null = null;


  constructor(private route: ActivatedRoute, private formationService: FormationService){}
  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.formationService.getById(p['id'])
      .subscribe(res => {
       let d: any = res.data();
       d.id = res.id;
       this.formation = d;
      })

    })
  }
}
