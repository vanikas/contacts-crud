import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from '../pages/components/contact-list/contact-list.component';
import { AddContactComponent } from '../pages/components/add-contact/add-contact.component';

const routes: Routes = [
  {path: '', redirectTo: 'contacts', pathMatch: 'full'},
  {path: 'contacts', component: ContactListComponent},
  {path: 'contacts/add', component: AddContactComponent},
  {path: '**', redirectTo: 'contacts', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
