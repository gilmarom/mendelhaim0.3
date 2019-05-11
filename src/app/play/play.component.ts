import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PodcastService} from '../podcast.service';
import { Podcast } from '../podcast';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})

export class PlayComponent implements OnInit {
  @Input() podcast: Podcast;
  public show_dialog : boolean = false;
  public button_name : any = 'Show Login Form!';
  public image: string= '../assets/play-white.png';
  constructor( 
    private location:Location,
    private route: ActivatedRoute,
    private podcastService: PodcastService
  ) {}

  ngOnInit() {
   this.getPodcast() 
  }
  
  toggle() {
    this.show_dialog = !this.show_dialog;

    // CHANGE THE TEXT OF THE BUTTON.
    if(this.show_dialog) 
      this.button_name = "Hide Login Form!";
     
    else
      this.button_name = "Show Login Form!";
      this.image ="../assets/pause.png";
      
  }
  getPodcast(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.podcastService.getPodcast(id)
      .subscribe( podcast => this.podcast = podcast);
  }
 
  goBack(): void {
    this.location.back();
  }
}
