import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestoService } from '../resto-service.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  addResto: FormGroup;
  alert: boolean = false;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private restoService: RestoService) { }

  ngOnInit() {
    this.addResto = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      location: ['', Validators.required],
      telephone: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.addResto.invalid) {
      return;
    }
    this.restoService.addResto(this.addResto.value).subscribe((result) => {
      this.alert = true;
      console.log("The added-restaurant details are:"+result);
    });
  }

  closeAlert() {
    this.alert = false;
    this.submitted = false;
    this.addResto.reset();
  }
}
