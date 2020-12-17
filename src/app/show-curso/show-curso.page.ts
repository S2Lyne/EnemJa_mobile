import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Curso } from 'src/models/Curso';
import { CursoService } from 'src/services/CursoService';
import { VideoPlayer } from '@ionic-native/video-player/ngx';

@Component({
  selector: 'app-show-curso',
  templateUrl: './show-curso.page.html',
  styleUrls: ['./show-curso.page.scss'],
})
export class ShowCursoPage implements OnInit {

  public curso: Curso = new Curso();
  private _htmlLoading: HTMLIonLoadingElement
  constructor(
    private cursosService: CursoService,
    private _loading: LoadingController,
    private _route: ActivatedRoute,
    private videoPlayer: VideoPlayer
  ) { }

  ngOnInit() {
    this._route.params.subscribe(res => {      
      this.cursosService.buscar(res['curso_id']).subscribe(curso => {
        this.curso = curso        
      })
    })
  }

  veraula(url:string) {
    this.videoPlayer.play(url).then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }

}
