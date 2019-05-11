
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Contact } from './contact';
import { RESEARCHES } from './mock-researches';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root',
})

export class ContactService {
  donationMsg: Contact[];
  errorData:{};
  url = 'http://localhost:4000';
  constructor(private messageService: MessageService, private http:HttpClient ) { }
  
  
  sendContact(contact: Contact) {
  
    this.http.post(`${this.url}/contact/send`, contact)
        .subscribe(res => console.log('Done'));
  }


  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.
      
      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong.

      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    
    // return an observable with a user-facing error message
    
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}