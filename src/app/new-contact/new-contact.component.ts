import { Component, inject, Input } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { RouterLink } from '@angular/router';
import { Contact } from '../contacts.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-contact',
  imports: [RouterLink, FormsModule],
  templateUrl: './new-contact.component.html',
  styleUrl: './new-contact.component.css',
})
export class NewContactComponent {
  @Input() index!: number;

  contactsService = inject(ContactsService);
  contacts: Contact[] = this.contactsService.contacts;

  newId = this.contacts.length;

  onAddContact(fname: string, lname: string, phone: string, email: string) {
    const newContact: Contact = {
      id: this.newId,
      fname: fname.trim(),
      lname: lname.trim(),
      phone: phone.trim(),
      email: email.trim(),
    };
    this.contactsService.addContact(newContact);
  }
}
