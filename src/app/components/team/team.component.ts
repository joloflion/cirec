import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  teams = [
    {
      name: "",
      img: "assets/img/team1.jpeg"

    },
    {
      name: "",
      img: "assets/img/team2.jpeg"

    },
    {
      name: "",
      img: "assets/img/team1.jpeg"

    }
  ]

}
