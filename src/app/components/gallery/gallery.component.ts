import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  posts = [
    {
      id: "1",
      img: "assets/img/gallery4.jpeg"
    },
    {
      id: "2",
      img: "assets/img/c2.jpeg"
    },
    {
      id: "3",
      img: "assets/img/c3.jpeg"
    },
    {
      id: "4",
      img: "assets/img/gallary5.jpeg"
    },
    {
      id: "4",
      img: "assets/img/c1.jpeg"
    }
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    navSpeed: 700,

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      },
      992:{
        items: 1
      },
     1200: {
         items: 1
      }
    },
    nav: false
  }


}
