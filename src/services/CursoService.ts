import { ICursoService } from 'src/interfaces/ICursoService';
import { Curso } from 'src/models/Curso';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/models/Usuario';
import { UsuarioService } from './UsuarioService';
import { Matricula } from 'src/models/Matricula';
import { Global } from 'src/shared/Global';
@Injectable({
    'providedIn': 'root'
})
export class CursoService implements ICursoService {
    
    public apiUrl: string = `${Global.ApiUrl}`;
    private _usuarioLogado: Usuario = new Usuario();
    private _matricula: Matricula = new Matricula();

    constructor (private _usuarioService: UsuarioService, 
        private _httpClient: HttpClient) {
        this._usuarioLogado = this._usuarioService.retornarUsuarioLogado();        
    }    
    
    matricular(curso_id: number): Observable<Curso> {        
        this._matricula.curso_id = curso_id;        
        this._matricula.usuario_id = this._usuarioLogado.id;        
        return this._httpClient.post<Curso>(this.apiUrl+'matricular', this._matricula);
    }    
    
    listar(): Observable<Curso[]> {
        return this._httpClient.get<Curso[]>(this.apiUrl+'cursos');
    }

    buscar(curso_id: number): Observable<Curso> {
        return this._httpClient.get<Curso>(this.apiUrl+`show-curso/${curso_id}`);
    }    

}