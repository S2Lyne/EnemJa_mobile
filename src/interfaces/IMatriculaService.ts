import { Observable } from 'rxjs';
import { Curso } from 'src/models/Curso';

export interface IMatriculaService{
    
    listarMatricula() : Observable<Curso[]>;    
    
}