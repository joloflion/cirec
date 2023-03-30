import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {

  @ViewChild('video') video1: any;
  @ViewChild('video1') video2: any;

  played: boolean = false;
  paused: boolean = false;



  testimonials = [
    {
      video: "assets/videos/temoin1",
      poster: "assets/videos/thumb1.png"
    },
    {
      video: "assets/videos/temoin2",
      poster: "assets/videos/thumb2.png"
    }
  ]


  play() {
    this.video1.nativeElement.play();
    if(this.video1.nativeElement.played){
      this.played  = true;
    }

  }

  pause() {
    this.video1.nativeElement.pause();
    if(this.video1.nativeElement.paused){
      this.paused = true;
    }
  }

}
