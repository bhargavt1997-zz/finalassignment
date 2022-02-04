import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { courses } from '../courses';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  courseIdRouted:any
courseViewed:courses[]=[];
courses:courses[]=[];
  constructor(private route:ActivatedRoute,private commonService:DashboardServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.courseIdRouted = params.get('courseId');
 });
  console.log(this.courseIdRouted);
  this.getCourses();
  }
  getCourses() {
    this.commonService.getCoursesData().subscribe((res:any)=>{
      res.forEach((element:any) => {
        if(element.id == this.courseIdRouted)
        this.courses.push(element);
      });
    })


    // this.courses.filter((item)=>{
    //   if(this.courseIdRouted.includes(item.id)){
    //     this.courseViewed.push(item);
    //   }
    // })
    console.log(this.courses);
  }
}
