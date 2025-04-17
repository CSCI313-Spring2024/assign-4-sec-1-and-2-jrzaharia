import { Component, inject } from '@angular/core';
import { ContactCardComponent } from '../contact-card/contact-card.component';
import { Contact, ContactsService } from '../contacts.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contacts-list',
  imports: [ContactCardComponent, RouterLink],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.css',
})
export class ContactsListComponent {
  contacts: Contact[] = [];

  contactsService = inject(ContactsService);

  ngOnInit(): void {
    this.contacts = this.contactsService.contacts;
  }
}
