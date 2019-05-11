import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Research, Donation } from './research';
import { RESEARCHES } from './mock-researches';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})

export class ResearchService {
  donationMsg: Donation[];
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private messageService: MessageService, private http: HttpClient) { }
  
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
  
  // sent contact form http post request   
  public donateMsg(donationMsg: Donation): 
    Observable<Donation> {
    return this.http.post<Donation>('api/contacts/sendContactMsg', donationMsg);
  } 
}