import { Component, OnInit } from '@angular/core';
import { courses } from '../courses';
import { DashboardServiceService } from '../dashboard-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  CourseList: courses[] = [];
  cartItems: any = [];
  CartItemstoDisplay: courses[] = [];
  totalCartPrice = 0;
  totalCartPriceOriginal = 0;
  constructor(private commonService: DashboardServiceService) {}
  ngOnInit(): void {
    this.getCourses();
    this.getCartList();
  }
  getCourses() {
    this.commonService.getCoursesData().subscribe((res: any) => {
      res.forEach((element: any) => {
        this.CourseList.push(element);
      });
    });
  }
  ngDoCheck() {
    this.getCartList();
  }
  getCartList() {
    this.CartItemstoDisplay = [];
    this.totalCartPrice = 0;
    this.totalCartPriceOriginal = 0;
    this.cartItems = this.commonService.cart;
    this.CourseList.filter((item) => {
      if (this.cartItems.includes(item.id)) {
        this.CartItemstoDisplay.push(item);
        this.totalCartPriceOriginal += item.price;
        this.totalCartPrice += item.price - (item.price * item.discount) / 100;
      }
    });
    this.totalCartPriceOriginal =
      this.totalCartPriceOriginal - this.totalCartPrice;
  }

  clickCheckOut() {
    this.commonService.emptyCart();
    this.totalCartPriceOriginal = 0;
  }

  moveToWishList(id: any) {
    this.commonService.removeFromCart(id);
    this.commonService.updateWishList(id);
  }
  deleteFromCart(id: any) {
    this.commonService.removeFromCart(id);
    this.CourseList.filter((item) => {
      if (this.cartItems.includes(item.id)) {
        var discountPrice = item.price - (item.price * item.discount) / 100;
        this.totalCartPrice = this.totalCartPrice - discountPrice;
        this.totalCartPriceOriginal =
          this.totalCartPriceOriginal - (item.price - discountPrice);
      }
    });
  }
  GotoCourseDetails(id: any) {}
}
