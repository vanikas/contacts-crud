import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from 'src/app/pages/core/models/contacts';
import { CONSTANTS } from '../../core/constants/contant';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  form!: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder, private router : Router) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  // initializing reactive from for new add contact
  initializeForm() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required]],
    });
  }

  get f() {
    return this.form.controls;
  }

  // adding new contact in local
  submit() {
    const contactsList = JSON.parse(localStorage.getItem(CONSTANTS.CONTACTSLIST) || '');
    this.form.value.id = contactsList.length + 1;
    contactsList.push(this.form.value);
    localStorage.setItem(CONSTANTS.CONTACTSLIST, JSON.stringify(contactsList));
    this.router.navigateByUrl('contacts', { state: { edit: true } });
  }

  back() {
    this.router.navigateByUrl('contacts', { state: { edit: true } });
  }
}
