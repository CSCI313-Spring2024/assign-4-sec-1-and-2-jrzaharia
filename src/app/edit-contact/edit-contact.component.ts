import { Component, inject, Input } from '@angular/core';
import { Contact, ContactsService } from '../contacts.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  imports: [FormsModule, RouterLink],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css',
})
export class EditContactComponent {
  @Input() index!: number;

  contactsService = inject(ContactsService);

  contact: Contact = {
    id: -1,
    fname: '',
    lname: '',
    phone: '',
    email: '',
  };

  editContactId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const found = this.contactsService.getContactByIndex(id);
    if (id !== null && id !== -1 && found) {
      this.contact = { ...found };
      this.editContactId = id;
    }
  }

  // SetEditContact(contact: Contact) {
  //   Object.assign(contact, this.contact);
  //   this.editContactId = contact.id;
  // }

  OnSaveChanges() {
    this.contactsService.editContact(this.contact);
    this.resetForm();
  }

  resetForm() {
    this.contact = {
      id: -1,
      fname: '',
      lname: '',
      phone: '',
      email: '',
    };
    this.editContactId = null;
  }
}
