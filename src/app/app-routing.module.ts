import { NgModule } from '@angular/core';
import { HomeComponent} from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ResearchDetailsComponent  } from './research-details/research-details.component';
import { ResearchListComponent } from './research-list/research-list.component';
import { DonateComponent} from './donate/donate.component';
import { AboutComponent} from './about/about.component';
import { PodcastComponent} from './podcast/podcast.component';
import { PlayComponent } from './play/play.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './customers/dashboard/dashboard.component';


import { UserComponent } from './customers/user/user.component';
import { SignUpComponent } from './customers/user/sign-up/sign-up.component';
import { SignInComponent } from './customers/user/sign-in/sign-in.component';
import { UserProfileComponent } from './customers/user-profile/user-profile.component';
import { AuthGuard } from './customers/auth/auth.guard';



const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent},
  { path: 'signup', component: UserComponent,children: [{ path: '', component: SignUpComponent }]},
  { path: 'login', component: UserComponent,  children: [{ path: '', component: SignInComponent }]},
  { path: 'userprofile', component: UserProfileComponent,canActivate: [AuthGuard]},
  { path: 'detail/:id', component: ResearchDetailsComponent },
  { path: 'research', component: ResearchListComponent },
  { path: 'donate/:id', component: DonateComponent},
  { path: 'about', component: AboutComponent},
  { path: 'podcast', component: PodcastComponent },
  { path: 'podcast/:id', component: PlayComponent },
  { path: 'contact', component:ContactComponent},
  { path: 'dashboard', component:DashboardComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
