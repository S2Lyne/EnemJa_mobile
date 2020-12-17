import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Curso } from 'src/models/Curso';
import { CursoService } from 'src/services/CursoService';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  public cursos: Curso[] = new Array<Curso>();
  private _htmlLoading: HTMLIonLoadingElement
  constructor(
    private cursosService: CursoService,
    private _router: Router,
    private _loading: LoadingController
  ) {
    this.cursosService.listar().subscribe(res => {
      this.cursos = res;
    })
  }

  ngOnInit() {

  }

  async carregando(){
    //criar o loading
    this._htmlLoading = await this._loading.create({
      cssClass: 'my-custom-class',
      message: 'Por favor, Aguarde...',
      id: 'custom-loading'
    });
    await this._htmlLoading.present();

  }

  matricular(curso_id: number)
  {   
    this.carregando();
    this.cursosService.matricular(curso_id).subscribe(res => {
      console.log(res)
      this._htmlLoading.dismiss();
      //direcionar para a matriculas
      this._router.navigate(['/matriculas']);
    });
  }
}
