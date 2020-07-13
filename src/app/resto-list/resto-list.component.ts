import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto-service.service';

@Component({
  selector: 'app-resto-list',
  templateUrl: './resto-list.component.html',
  styleUrls: ['./resto-list.component.css']
})
export class RestoListComponent implements OnInit {
  
  restoList:any= [];
  constructor(private restoService: RestoService) { }

  ngOnInit() {
    this.restoService.getRestoList().subscribe((result)=>{
      this.restoList = result;
    });
  }

}
