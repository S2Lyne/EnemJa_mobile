import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-assistir',
  templateUrl: './assistir.page.html',
  styleUrls: ['./assistir.page.scss'],
})
export class AssistirPage implements OnInit {

  constructor(private _navCtrl: NavController,
     private youtube: YoutubeVideoPlayer) { }

  ngOnInit() {
  }

  watch(watch: string){
    this.youtube.openVideo(watch);
}

}
