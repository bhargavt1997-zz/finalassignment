import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseDetailComponent } from './course-detail/course-detail.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CoursesComponent,
    CartComponent,
    CourseDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
    
  ],
  exports:[CartComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class DashboardModule { }
