import { Component, Input, OnInit } from '@angular/core';
import { courses } from 'src/app/dashboard/courses';

@Component({
  selector: 'app-wishlist-courses',
  templateUrl: './wishlist-courses.component.html',
  styleUrls: ['./wishlist-courses.component.css']
})
export class WishlistCoursesComponent implements OnInit {

  @Input() courses:courses[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
