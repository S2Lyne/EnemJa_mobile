import { Observable } from 'rxjs';
import { IContactService } from 'src/interfaces/IContactService';
import { Contact } from 'src/models/Contact';

export class ContactService implements IContactService{
    cadastrar(contact: Contact): Observable<Contact> {
        if(!contact.nome) throw new Error ('O campo nome é obrigatório.');
        if(!contact.email) throw new Error ('O campo email é obrigatporio.');
        if(!contact.comentario) throw new Error ('O campo comentário é obrigatório.');
        throw new Error('Method not implemented.');
    }
    
}