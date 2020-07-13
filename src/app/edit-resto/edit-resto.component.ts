import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestoService } from '../resto-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-resto',
  templateUrl: './edit-resto.component.html',
  styleUrls: ['./edit-resto.component.css']
})
export class EditRestoComponent implements OnInit {

  editResto: FormGroup;
  alert: boolean = false;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private restoService: RestoService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.restoService.getRestoInfoByID(this.router.snapshot.params.id).subscribe((result) => {
      this.editResto = this.fb.group({
        name: result['name'],
        email: result['email'],
        location: result['location'],
        mobile: result['mobile']
      });
    });

    this.editResto = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      location: ['', Validators.required],
      mobile: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.editResto.dirty) {
      this.submitted = true;
      if (this.editResto.invalid) {
        return;
      }
      this.restoService.editResto(this.router.snapshot.params.id, this.editResto.value).subscribe((result) => {
        this.alert = true;
        console.log("The updated restaurant details:" + result);
      });
    }
  }

  closeAlert() {
    this.alert = false;
    this.editResto.reset();
    this.submitted = false;
  }

}
