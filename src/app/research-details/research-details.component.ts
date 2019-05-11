import { Component, OnInit, Input } from '@angular/core';
import { Research } from '../research';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ResearchService } from '../research.service';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-research-details',
  templateUrl: './research-details.component.html',
  styleUrls: ['./research-details.component.scss']
})
export class ResearchDetailsComponent implements OnInit {
    a: object;
    @Input() research: Research;
  constructor(  private route: ActivatedRoute,
                private researchService: ResearchService,
                private location: Location,
                private http: HttpClient
                ) { 
                   this.http.get('assets/data/app.json').subscribe((data)=>this.a =data)
                }

  ngOnInit(): void {
    this.getResearch();
  }

  getResearch(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.researchService.getResearch(id)
      .subscribe( research => this.research = research);
  }

  goBack(): void {
    this.location.back();
  }

}
