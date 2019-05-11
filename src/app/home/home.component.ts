import { Component, OnInit,Input } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  Carusela=[];
  timeLeft: number = 60;
  interval;
  pageId=1;
  filter:number;
  @Input() carousela=[]; 
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 12000;
    config.wrap = true;
    config.keyboard = true;
  }

  ngOnInit() {
    this.carousela = [{
        id: 1, text: `The Rise Of The Ageless Starman, a voice unleashing human potential, force that drives the longevity era`, buttonText:"Take off", background: "#0A2B30"
    },{id:2,text:'Under Pressure, The Rise Of The Ageless Starman Episode 2',buttonText:'Guest Dr Scott Sheer',},{id:3, text:`Compassion, creativity, vitality and connectivity that radiates optimism`, buttonText:" Our Why?"},{id:4,text: `"we're the masters of our own fate, We're the captains of our own souls"`,buttonText:"Let's take control"},{}]
  
  }

   startTimer() {
     
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
          this.pageId++;
    console.log(this.pageId);
      } else {
        this.timeLeft = 50;
        console.log('asshole');
        if (this.pageId=4){
        this.pageId=1;
        }
        else{
          this.pageId++;
          console.log(this.pageId); 
        }
        
      }
    },140)
    
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

}
