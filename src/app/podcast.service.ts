import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Podcast } from './podcast';
import { PODCASTS } from './mock-podcasts';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})

export class PodcastService {
    
  constructor(private messageService: MessageService) { }  

  getPodcast(id: number): Observable<Podcast> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(PODCASTS.find(podcast => podcast.id === id));
  }
}

