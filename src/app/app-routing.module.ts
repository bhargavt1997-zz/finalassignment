import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailComponent } from './dashboard/course-detail/course-detail.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { WishlistComponent } from './wishlist/wishlist/wishlist.component';

const routes: Routes = [
{
  path:"dashboard",
  component:DashboardComponent
},
{
  path:"wishlist",
  component:WishlistComponent
},
{
  path:"courseDetail",
  component:CourseDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
