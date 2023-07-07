import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Contact } from 'src/app/pages/core/models/contacts';
import { API_END_POINT } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private apiRoutes = {
    contacts: 'contacts'
  }
  constructor(private http: HttpClient) { }

  getContacts(): Observable<any> {
    return this.http.get(API_END_POINT.base_url + this.apiRoutes.contacts);
  }
}
