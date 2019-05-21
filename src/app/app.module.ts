import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResearchListComponent } from './research-list/research-list.component';
import { ResearchDetailsComponent } from './research-details/research-details.component';
import { DonateComponent } from './donate/donate.component';
import { PlayComponent } from './play/play.component';
import { PodcastComponent } from './podcast/podcast.component';

import { researchFilterPipe } from './research-filter.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './customers/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// components

import { UserComponent } from './customers/user/user.component';
import { SignUpComponent } from './customers/user/sign-up/sign-up.component';
//routes

import { UserProfileComponent } from './customers/user-profile/user-profile.component';
import { SignInComponent } from './customers/user/sign-in/sign-in.component';
import { UserService } from './customers/shared/user.service';
//other
import { AuthGuard } from './customers/auth/auth.guard';
import { AuthInterceptor } from './customers/auth/auth.interceptor';
import { TryComponent } from './try/try.component';
@NgModule({
  declarations: [
    AppComponent,
    ResearchListComponent,
    ResearchDetailsComponent,
    DonateComponent,
    researchFilterPipe,
    AboutComponent,
    PodcastComponent,
    PlayComponent,
    ContactComponent,
    DashboardComponent,
    HomeComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    TryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
        NgbModule.forRoot()
    

  ],
  providers: [
    researchFilterPipe,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
    }
    ,AuthGuard,
    UserService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
