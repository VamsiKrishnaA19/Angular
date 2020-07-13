import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { RestoService } from '../resto-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alert: boolean = false;
  alert1: boolean = false;
  userType: string;
  users: any = [];
  constructor(private router: ActivatedRoute,
    private route: Router,
    private fb: FormBuilder,
    private restoService: RestoService) { }

  ngOnInit() {
    this.userType = this.router.snapshot.params.role;
    localStorage.setItem('role', this.userType);
  }

  loginResto = this.fb.group({
    name: [''],
    mobile: ['']
  });

  onSubmit() {
    if (this.userType == 'admin') {
      this.restoService.adminLogin().subscribe((user) => {
        this.users = user;
        for (let i = 0; i < this.users.length; i++) {
          if (this.loginResto.controls.mobile.value == this.users[i].mobile &&
            this.loginResto.controls.name.value == this.users[i].name) {
            this.alert = true;
            this.route.navigateByUrl('/partnerlist');
          }
        }
        if (this.alert == false) {
          this.alert1 = true;
        }
      });
    }
    else if (this.userType == 'staff') {
      this.restoService.staffLogin().subscribe((user) => {
        this.users = user;
        for (let i = 0; i < this.users.length; i++) {
          if (this.loginResto.controls.mobile.value == this.users[i].mobile &&
            this.loginResto.controls.name.value == this.users[i].name) {
            this.alert = true;
            this.route.navigateByUrl('/partnerlist');
          }
        }
        if (this.alert == false) {
          this.alert1 = true;
        }
      });
    }
  }
  closeAlert() {
    this.alert = false;
    this.alert1 = false;
  }

}
