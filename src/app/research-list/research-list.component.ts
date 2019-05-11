import { Component, OnInit } from '@angular/core';
import { Research } from '../research';
import { ResearchService } from '../research.service';
import { Pipe, PipeTransform } from '@angular/core';
import {researchFilterPipe } from '../research-filter.pipe';
import { HttpClient} from '@angular/common/http';
import { trigger, state, style, animate, transition, group } from '@angular/animations'
@Component({
  selector: 'app-research-list',
  templateUrl: './research-list.component.html',
  styleUrls: ['./research-list.component.scss'],
  
})
export class ResearchListComponent implements OnInit {

 categories = [];
 researches: Research[];
 a: object;
 textfilter: string; 
 constructor(private researchService: ResearchService, private http:HttpClient, researchPipe: researchFilterPipe) { 
     this.http.get('assets/data/app.json').subscribe((data)=>this.a =data)
  }

  ngOnInit() {
    this.getResearches();
    this.categories = [
      {Id:1, Name: 'Alzhaimer'},
      {Id:2,Name:'Parkinson'},
      {Id:3, Name:'Aging'}, 
      {Id:4, Name:'Sarcopenia'}];
  }

  
  getResearches(): void {
    this.researchService.getReseaeches()
        .subscribe(researches => this.researches = researches);
  }

}
