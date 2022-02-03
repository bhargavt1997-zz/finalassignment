import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist/wishlist.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';


@NgModule({
  declarations: [
    WishlistComponent,
  ],
  imports: [
    CommonModule,
    DashboardModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class WishlistModule { }
