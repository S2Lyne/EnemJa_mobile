import { from, Observable } from 'rxjs';
import {Curso} from 'src/models/Curso';

export interface ICursoService {        
    matricular(curso_id: number) : Observable<Curso>;
    listar() : Observable<Curso[]>;
    buscar(curso_id: number) : Observable<Curso>;
}