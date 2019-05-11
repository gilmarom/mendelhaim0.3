import { Component, OnInit } from '@angular/core';
import { ContactService} from '../contact.service'
import { NgForm } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  conForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private http:HttpClient, private cs: ContactService  ) { }

  ngOnInit() {
    this.contactForm();
  }
  

   contactForm() {
     
      this.conForm = this.fb.group({
      name: ['', Validators.required ],
      email:['', [Validators.required, Validators.email]],
      phone: ['', Validators.required ],
      description:[''],
      website:[''],
      university:['']
    });
  }

  sendContact(){
    this.submitted = true;
    this.cs.sendContact(this.conForm.value);
    console.log("sdklk lksdl lk lk");
  
    alert(JSON.stringify(this.conForm.value))
  }
}
