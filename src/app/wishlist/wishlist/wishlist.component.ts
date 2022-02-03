import { Component, OnInit } from '@angular/core';
import { courses } from 'src/app/dashboard/courses';
import { DashboardServiceService } from 'src/app/dashboard/dashboard-service.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private DashboardService:DashboardServiceService) { }
  CourseList: any = [];
  wishListItems =[];
  
  ngOnInit(): void {
    this.getCourses();
  }
  getCourses() {
    this.DashboardService.getCoursesData().subscribe((res:any)=>{
      res.forEach((element:any) => {
        this.CourseList.push(element);
      });
    })
  }
  getWishlistData(){
    // this.wishListItems = [];
    // this.wishListItems = this.DashboardService.wishList;
    // this.CourseList.filter((item) => {
    //   if (this.wishListItems.includes(item.id)) {
    //     this.CartItemstoDisplay.push(item);
    //     this.totalCartPrice += item.price;
    //   }
    // });
  }
  
}
