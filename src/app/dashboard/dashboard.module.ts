import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CoursesComponent,
    CartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
