import { Component, OnInit } from '@angular/core';
import { courses } from '../courses';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses:courses[] =[];
  constructor(private CommonService:DashboardServiceService) { }

  ngOnInit(): void {
    this.getCourses();
  }
  getCourses() {
    this.CommonService.getCoursesData().subscribe((res:any)=>{
      res.forEach((element:any) => {
        this.courses.push(element);
      });
    })
  }
  addToCart(id:String){
    this.CommonService.updateCart(id);
  }
}
