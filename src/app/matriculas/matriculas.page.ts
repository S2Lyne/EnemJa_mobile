import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Matricula } from 'src/models/Matricula';
import { IMatriculaService } from 'src/interfaces/IMatriculaService';
import { MatriculaService } from 'src/services/MatriculaService';

@Component({
  selector: 'app-matriculas',
  templateUrl: './matriculas.page.html',
  styleUrls: ['./matriculas.page.scss'],
})
export class MatriculasPage implements OnInit {

  public matriculas: Matricula[] = new Array<Matricula>();

  constructor(private _router: Router,
    private _matriculaService: MatriculaService) {
      this.obterCursos();
     }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.obterCursos();
  }

  async obterCursos(){
    const listaMatriculas = await this._matriculaService.listarMatricula();
    this.matriculas = listaMatriculas;
    console.log(this.matriculas);
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



