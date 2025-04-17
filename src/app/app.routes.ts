import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

export const routes: Routes = [
  {
    path: '',
    component: ContactsListComponent,
    title: 'Contact List',
  },
  {
    path: 'new-contact',
    component: NewContactComponent,
    title: 'New Contact',
  },
  {
    path: 'edit-contact/:id',
    component: EditContactComponent,
    title: 'Edit Contact',
  },
];
