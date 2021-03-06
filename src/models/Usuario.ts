import { Matricula } from './Matricula';

export class Usuario {
    public id: number = null;
    public email: string = null;
    public confirmarEmail: string = null;
    public nome: string = null;
    public senha: string = null;
    public confirmarSenha: string = null;
    public matriculas: Matricula[] = new Array<Matricula>();
}