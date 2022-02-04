import { Component, Input, OnInit } from '@angular/core';
import { courses } from '../courses';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  @Input() courses:courses[] =[];
  constructor(private CommonService:DashboardServiceService) { }
  ngOnInit(): void {
  }
  addToCart(id:String){
    this.CommonService.updateCart(id);
  }
  addToWishlist(id:String){
    this.CommonService.updateWishList(id);
  }
}
