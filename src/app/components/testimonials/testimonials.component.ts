import { Component, ViewChild } from '@angular/core';
import { Video } from 'src/app/core/models/video';

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



  videos: Video[] = [
    {
      id: "1",
      mp4: "assets/videos/temoin1.mp4",
      ogg: "assets/videos/thumb1.ogg",
      poster: "assets/videos/thumb1.png"
    },
    {
      id: "2",
      mp4: "assets/videos/temoin2.mp4",
      ogg: "assets/videos/temoin2.ogg",
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
