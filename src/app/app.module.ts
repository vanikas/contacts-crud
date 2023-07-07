import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddContactComponent } from './pages/components/add-contact/add-contact.component';
import { ContactListComponent } from './pages/components/contact-list/contact-list.component';
import { AppRoutingModule } from './route/app-routing.module';
import { DirectiveDirective } from './pages/shared/directives/directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    ContactListComponent,
    DirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
