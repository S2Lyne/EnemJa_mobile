import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/models/Curso';
import { CursoService } from 'src/services/CursoService';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {

  public cursos: Curso[] = new Array<Curso>();

  constructor(
    private cursosService: CursoService
  ) {
    this.cursosService.listar().subscribe(res => {
      this.cursos = res;
    })
  }

  ngOnInit() {

  }

  matricular(curso_id: number)
  {    
    this.cursosService.matricular(curso_id).subscribe(res => {
      console.log(res)
    });
  }
}
