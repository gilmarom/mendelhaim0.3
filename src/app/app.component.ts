import { Component,Input, Output, EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'client';
  a: object;


  constructor( private http:HttpClient,  private router: Router,
     ){
    this.http.get('assets/data/app.json').subscribe((data)=>this.a =data);
  }
   logout() {
    
        this.router.navigate(['/login']);
    }
}
