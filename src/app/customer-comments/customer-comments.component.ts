import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-comments',
  templateUrl: './customer-comments.component.html',
  styleUrls: ['./customer-comments.component.css']
})
export class CustomerCommentsComponent implements OnInit {

  commentsForm: FormGroup;
  alert: boolean = false;
  customerComments: any = [];

  constructor(private fb: FormBuilder, private restoService: RestoService) { }

  ngOnInit() {
    this.restoService.getCustomerComments().subscribe((result) => {
      this.customerComments = result;
    });

    this.commentsForm = this.fb.group({
      comments: [''],
      date: new Date()
    });
  }

  onSubmit() {
    this.restoService.addCustomerComments(this.commentsForm.value).subscribe((result) => {
      this.customerComments.push(result);
      this.alert = true;
    });
  }

  closeAlert() {
    this.alert = false;
    this.commentsForm.reset();
  }

}
