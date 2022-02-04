import { Component, OnInit } from '@angular/core';
import { courses } from 'src/app/dashboard/courses';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  CourseList:courses[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
