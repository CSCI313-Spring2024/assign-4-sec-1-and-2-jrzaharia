import { Injectable } from '@angular/core';

export interface Contact {
  id: number;
  fname: string;
  lname: string;
  phone: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contacts: Contact[] = [
    {
      id: 0,
      fname: 'John',
      lname: 'Doe',
      phone: '(123)-456-7980',
      email: 'johndoe@email.com',
    },
    {
      id: 1,
      fname: 'Jane',
      lname: 'Doe',
      phone: '(098)-765-4321',
      email: 'janedoe@email.com',
    },
    {
      id: 2,
      fname: 'Test',
      lname: 'Contact',
      phone: '(001)-001-0001',
      email: 'janedoe@email.com',
    },
  ];
  constructor() {}

  addContact(contact: Contact) {
    this.contacts.push(contact);
  }

  editContact(newContact: Contact) {
    Object.assign(this.getContactByIndex(newContact.id), newContact);
  }

  DeleteContact(index: number) {
    this.contacts.splice(index, 1);
  }

  getContactByIndex(index: number): Contact {
    return this.contacts[index];
  }
}
