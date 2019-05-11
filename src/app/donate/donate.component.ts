
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Research , Donation} from '../research';
import { ResearchService } from '../research.service';
import { DonationService } from '../donation.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})

export class DonateComponent implements OnInit {
  
  model = new Donation();
  donForm: FormGroup;
  donorName;
  email;
  phone;
  amount;
  creditNum;
  labId;
  captcha;  
  rersearchId;
  category;
  id;
  @Input() research: Research;
   a: object;
  submitted = false;
  constructor(private fb: FormBuilder, private ds: DonationService, private route: ActivatedRoute,private http:HttpClient) {
    this.createForm();
    this.http.get('assets/data/app.json').subscribe((data)=>this.a =data)
  }
    
  
  ngOnInit(): void {
    this.getResearch();
    this.createForm();
  }

   getResearch(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.ds.getResearch(this.id)
      .subscribe( research => this.research = research);
  }


  createForm() {
     
    this.donForm = this.fb.group({
      donorName: ['', Validators.required ],
      email:['', [Validators.required, Validators.email]],
      amount: ['', Validators.required ],
      phone: ['', Validators.required ],
      creditNum: ['', Validators.required ],
      creditName:[''],
      expYear:[''],
      expMonth:[''],
      SecurityCode:[''],
      BillingAddress:[''],
      labId:[this.id, Validators.required],
      captcha:['', Validators.required]
    });
  }
  
  get f() { return this.donForm.controls; }
  
  addDonation() {
    this.submitted = true;
   

    this.ds.addDonation(this.donForm.value,this.id);
     
    
    console.log("sdklk lksdl lk lk");
    this.ds.donateMsg;
    alert(JSON.stringify(this.donForm.value))
  }
}


