import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
