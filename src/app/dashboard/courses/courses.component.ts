import { Component, Input, OnInit } from '@angular/core';
import { courses } from '../courses';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  showStar = Array(10).fill('false');

  @Input() courses:courses[] =[];
  constructor(private CommonService:DashboardServiceService) { }
  ngOnInit(): void {
  }
  addToCart(id:any){
    this.CommonService.updateCart(id);
  }
  addToWishlist(id:any){
    this.CommonService.updateWishList(id);
    this.showStar[id] = !this.showStar[id];

  }
}
