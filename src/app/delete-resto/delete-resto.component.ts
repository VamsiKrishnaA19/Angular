import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestoService } from '../resto-service.service';
@Component({
  selector: 'app-delete-resto',
  templateUrl: './delete-resto.component.html',
  styleUrls: ['./delete-resto.component.css']
})
export class DeleteRestoComponent implements OnInit {

  restoList: any = [];
  constructor(private router: ActivatedRoute, private restoService: RestoService) { }

  ngOnInit() {
    this.restoService.getRestoList().subscribe((result) => {
      this.restoList = result;
    });
    this.restoService.deleteResto(this.router.snapshot.params.id).subscribe((result) => {
      this.restoList.splice(this.router.snapshot.params.id - 1, 1);
      console.log("The deleted restauranr details:"+ result);
    });
  }

}
