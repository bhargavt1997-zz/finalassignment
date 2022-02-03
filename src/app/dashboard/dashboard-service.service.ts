import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { courses } from './courses';

@Injectable({
  providedIn: 'root',
})
export class DashboardServiceService {
  cart: any = [];
  wishList: any = [];
  updateWishList(id: String) {
    if (this.wishList.includes(id)) {
      alert('already added in the WishList');
    } else {
      this.wishList.push(id);
      console.log(this.wishList);
    }
  }

  updateCart(id: String) {
    if (this.cart.includes(id)) {
      alert('already added in the cart');
    } else {
      this.cart.push(id);
      console.log(this.cart);
    }
  }

  constructor(private http: HttpClient) {}
  public url = './assets/courses.json';
  getCoursesData(): Observable<courses> {
    return this.http.get<courses>(this.url);
  }
}
