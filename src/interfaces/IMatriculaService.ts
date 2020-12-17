import { Observable } from 'rxjs';
import { Matricula } from 'src/models/Matricula';

export interface IMatriculaService{
    
    listarMatricula() : Promise<Matricula[]>;
    
    
}