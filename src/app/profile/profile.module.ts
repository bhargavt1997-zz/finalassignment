import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class ProfileModule { }
