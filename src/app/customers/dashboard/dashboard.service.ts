import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType,HttpEvent,HttpErrorResponse } from '@angular/common/http';

import { DashboardData } from './dashboard';
import { MessageService } from './../../message.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})

export class DashboardService {
  uri = 'http://localhost:4000/dashboard';
  
  constructor(private messageService: MessageService ,private http: HttpClient) { }  
  
  getData() {
    return this
           .http
           .get(`${this.uri}`);
  } 

}

