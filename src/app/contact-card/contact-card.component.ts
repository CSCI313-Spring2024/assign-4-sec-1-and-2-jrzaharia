import { Component, inject, Input } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-card',
  imports: [RouterLink],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css',
})
export class ContactCardComponent {
  @Input() contact!: {
    fname: string;
    lname: string;
    phone: string;
    email: string;
  };

  @Input() index!: number;

  contactsService = inject(ContactsService);

  OnDeleteContact(index: number) {
    this.contactsService.DeleteContact(index);
  }
}
