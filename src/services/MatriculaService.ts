import { IMatriculaService } from 'src/interfaces/IMatriculaService';
import { Observable } from 'rxjs';
import { Global } from 'src/shared/Global';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/models/Usuario';
import { UsuarioService } from './UsuarioService';
import { HttpClient } from '@angular/common/http';
import { rejects } from 'assert';
import { Curso } from 'src/models/Curso';
@Injectable({
    providedIn: 'root'
})
export class MatriculaService implements IMatriculaService{
    //post
    public apiUrl: string = Global.ApiUrl;
    private _usuarioLogado: Usuario = new Usuario();
    public matriculas: Curso[] = [];

    constructor(private _usuarioService: UsuarioService, 
        private _httpClient: HttpClient){
        this._usuarioLogado = this._usuarioService.retornarUsuarioLogado();
    }

    listarMatricula(): Observable<Curso[]> { 
        return this._httpClient.post<Curso[]>(this.apiUrl+'meuscursos',{ usuario_id: this._usuarioLogado.id });
        // this.matriculas = [];
        // const promise = new Promise<Matricula[]>(async (resolve, reject) =>{
        //     try {
        //         //forma 1
        //         const usuario = await this._usuarioService.buscarUsuario().toPromise();
        //         this.matriculas = usuario.matriculas;
        //         resolve(usuario.matriculas);

        //         //forma 2
        //         // const usuario = this._usuarioService.buscarUsuario();
        //         // usuario.subscribe(res => {
        //             //resolve(res.carros);
        //         //});

        //     } catch(e){
        //         reject(e);
        //     }
        // });
        // return promise;        
    }
}