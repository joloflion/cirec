import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  carousel = [
    {
      id: 1,
      title: 'Apprendre par la Pratique',
      desc: 'Pratique comptable et fiscale',
      Image: ''
    },
    {
      id: 2,
      title: 'Formations Pratiques destinées',
      desc: 'Aux étudiants et professionnels',
      Image: ''
    }
  ]

}
