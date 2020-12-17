import { IMatriculaService } from 'src/interfaces/IMatriculaService';
import { Observable } from 'rxjs';
import { Global } from 'src/shared/Global';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/models/Usuario';
import { UsuarioService } from './UsuarioService';
import { HttpClient } from '@angular/common/http';
import { rejects } from 'assert';
import { Matricula } from 'src/models/Matricula';
@Injectable({
    providedIn: 'root'
})
export class MatriculaService implements IMatriculaService{
    //post
    public apiUrl: string = Global.ApiUrl+"matriculas";
    private _usuarioLogado: Usuario = new Usuario();
    public matriculas: Matricula[] = [];

    constructor(private _usuarioService: UsuarioService, 
        private _http: HttpClient){
        this._usuarioLogado = this._usuarioService.retornarUsuarioLogado();

    }

    listarMatricula(): Promise<Matricula[]> { 
        this.matriculas = [];
        const promise = new Promise<Matricula[]>(async (resolve, reject) =>{
            try {
                //forma 1
                const usuario = await this._usuarioService.buscarUsuario().toPromise();
                this.matriculas = usuario.matriculas;
                resolve(usuario.matriculas);

                //forma 2
                // const usuario = this._usuarioService.buscarUsuario();
                // usuario.subscribe(res => {
                    //resolve(res.carros);
                //});

            } catch(e){
                reject(e);
            }
        });
        return promise;
        
    }
}