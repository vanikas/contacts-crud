import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from 'src/app/pages/core/models/contacts';
import { ContactsService } from 'src/app/pages/core/services/contacts.service';
import { CONSTANTS } from '../../core/constants/contant';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {

  contactsList: Contact[] | any = [];
  form!: FormGroup;
  enableEditIndex = null;
  newAddedContact: Object | any = { edit: false };

  constructor(public contactService: ContactsService, private formBuilder: FormBuilder, private router: Router) {
    this.newAddedContact = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
    this.getContactsList();
    this.initializeForm();
  }


  // initializing reactive form for edit operation
  initializeForm() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required]],
      id: ['']
    });
  }

  // getting contacts list from API
  getContactsList() {
    this.contactService.getContacts().subscribe(response => {
      this.contactsList = response;
      if (this.newAddedContact?.edit) {
        // storing data locally using local storage
        this.contactsList = JSON.parse(localStorage.getItem(CONSTANTS.CONTACTSLIST) || '');
      }
      localStorage.setItem(CONSTANTS.CONTACTSLIST, JSON.stringify(this.contactsList));
    }, (error : any)=> {
        if (error?.status == 404) {
          // show alert
        }
    });
  }

  // updating contact list on the index basis
  update(i: number) {
    this.enableEditIndex = null;
    this.contactsList[i] = this.form.value;
    localStorage.setItem(CONSTANTS.CONTACTSLIST, JSON.stringify(this.contactsList));
  }

  // switching edit mode
  switchEditMode(i: any) {
    let user = this.contactsList[i];
    if (user) {
      this.form.setValue({ firstName: user?.firstName, lastName: user?.lastName, phone: user?.phone, id: user?.id });
    }
    this.enableEditIndex = i;
  }

  delete(i: number) {
    // deleting contact by index
    this.enableEditIndex = null;
    this.contactsList.splice(i, 1);
    localStorage.setItem(CONSTANTS.CONTACTSLIST, JSON.stringify(this.contactsList));
  }
}
