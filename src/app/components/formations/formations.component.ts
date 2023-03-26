import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/core/models/formation';
import { FormationService } from 'src/app/core/services/formation.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {

  formations: Formation[] = [];
  constructor(private formation: FormationService){

  }


  ngOnInit(): void {
    this.formation.getPosts()
    .subscribe(res => {
      res.docs.forEach(doc =>{
        let form: any = doc.data();
        form.id = doc.id;
        this.formations.push(form)
      })
    })
  }
}
