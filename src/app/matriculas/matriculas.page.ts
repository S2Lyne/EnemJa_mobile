import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Curso } from 'src/models/Curso';
import { MatriculaService } from 'src/services/MatriculaService';

@Component({
  selector: 'app-matriculas',
  templateUrl: './matriculas.page.html',
  styleUrls: ['./matriculas.page.scss'],
})

export class MatriculasPage implements OnInit {
  
  public matriculas: Curso[] = new Array<Curso>();
  private _htmlLoading: HTMLIonLoadingElement
  
  constructor(
    private _router: Router,
    private _matriculaService: MatriculaService,
    private _loading: LoadingController
  ) {
    this.obterCursos();
  }

  ngOnInit() {}

  ionViewDidEnter(){
    this.obterCursos();
  }

  async obterCursos(){
    this._matriculaService.listarMatricula().subscribe(res => {
      this.matriculas = res;
    })
  }

  vizualizarCurso(curso_id: Number){
    this._router.navigate([`/matriculas/${curso_id}`]);
  }

  chamarCursos()
  {  
      //direcionar para cursos
      this._router.navigate(['/cursos']);
    };
  }



