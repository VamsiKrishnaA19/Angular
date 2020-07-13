import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestoService } from '../resto-service.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;
  alert: boolean = false;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private restoService: RestoService) { }
  
  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      telephone: ['', Validators.required],
      enquiry: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    this.restoService.contactUs(this.contactForm.value).subscribe((result) => {
      this.alert = true;
      console.log("The contact-Us details:"+result);
    });
  }

  closeAlert() {
    this.alert = false;
    this.contactForm.reset();
    this.submitted = false;
  }

}
