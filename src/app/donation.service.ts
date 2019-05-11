import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Research, Donation } from './research';
import { RESEARCHES } from './mock-researches';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class DonationService {
  donationMsg: Donation[];
  errorData:{};
  url = 'http://localhost:4000';
  constructor(private messageService: MessageService, private http:HttpClient) { }
  
  
  addDonation(donation: Donation, id:number) {
  
    this.http.post(`${this.url}/donate/${id}/add`, donation)
        .subscribe(res => console.log('Done'));
  }
  getReseaeches(): Observable<Research[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(RESEARCHES);
  }
   
  getResearch(id: number): Observable<Research> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(RESEARCHES.find(research => research.id === id));
  }
  
  // sent donate form http post request   
  public donateMsg(donationMsg:Donation): 
    Observable<Donation> {
    return this.http.post<Donation>(`${this.url}/api/donate/sendContactMsg`, donationMsg);
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