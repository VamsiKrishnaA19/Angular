import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestoService } from '../resto-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerResto: FormGroup;
  alert: boolean = false;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private restoService: RestoService) { }
  
  ngOnInit() {
    this.registerResto = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      location: ['', Validators.required],
      mobile: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerResto.invalid) {
      return;
    }
    this.restoService.addstaff(this.registerResto.value).subscribe((user) => {
      this.alert = true;
    });
  }

  closeAlert() {
    this.alert = false;
    this.registerResto.reset();
    this.submitted = false;
  }
}
