import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Video } from 'src/app/core/models/video';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent {

  @ViewChild("videoPlayer", { static: false }) videoplayer!: ElementRef;
  isPlay: boolean = true;

  @Input() video!: Video;


  playPause(id: string){
    var video: any = document.getElementById("video_"+id);
    if (video.paused) video.play();
    else video.pause();
    this.isPlay = video.paused;
  }

}
