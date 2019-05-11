import { Component, OnInit, Input ,ElementRef,AfterViewInit} from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, AfterViewInit {
  userDetails;
  constructor(private userService: UserService, private router: Router, private elementRef: ElementRef) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        
      },
      err => { 
        console.log(err);
        
      }
    );
  }
  ngAfterViewInit(){
         this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'rgba(57, 94, 102, 1)';
      }
  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

}
