import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsuarioService } from 'src/interfaces/IUsuarioService';
import { Usuario } from 'src/models/Usuario';
import { Global } from 'src/shared/Global';

export class UsuarioService implements IUsuarioService{

    public apiUrl: string = `${Global.ApiUrl}usuarios`;

    constructor(private _httpClient: HttpClient){

    }

    cadastrar(usuario: Usuario): Observable<Usuario> {
        if(!usuario.nome) throw new Error ('O campo nome é obrigratório.');
        if(!usuario.email) throw new Error ('O campo email é obrigatório.');
        if(!usuario.confirmarEmail) throw new Error ('O campo confirmar email é obrigatório');
        if(!usuario.senha) throw new Error ('O campo senha é obrigatório.');
        if(!usuario.confirmarSenha) throw new Error ('O campo confirmar senha é obrigatório.');
        throw new Error("Já pode Salvar.");
    }
    atualizar(usuario: Usuario): Observable<Usuario> {
        throw new Error('Method not implemented.');
    }
    logar(usuario: Usuario): void {
        throw new Error('Method not implemented.');
    }
    retornarUsuarioLogado(): Usuario {
        let usuario: Usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
        return usuario;
    }
    logout(): void {
        localStorage.clear();
    }
    buscarUsuario(): Observable<Usuario> {
        const usuario: Usuario = this.retornarUsuarioLogado();
        return this._httpClient.get<Usuario>(`${this.apiUrl}/${usuario.id}`);
    }
    
}