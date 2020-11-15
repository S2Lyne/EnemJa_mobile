import { Observable } from 'rxjs';
import { Contact } from 'src/models/Contact';

export interface IContactService{

    cadastrar(contact: Contact) : Observable<Contact>;
}