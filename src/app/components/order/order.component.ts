import { Component, OnInit } from '@angular/core';
import {addToCart, cartArray, removeFromCart}  from '../../cartData'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public products: any;
  public subTotal: number = 0;
  public couponCodeOff: number = 0;
  public newSubtotal: number = 0;
  public taxAmount: number = 0;
  public totalAmount: number = 0;

  constructor(private _title: Title) {
    this._title.setTitle('Order');
  }
  
  ngOnInit(): void {
    this.products = cartArray;
    let arr = this.products.map((item: any) =>{
      return item.price * item.quantity;
    })
    this.subTotal = arr.reduce((acc: number, item: number) => acc + item);
    this.couponCodeOff = Math.floor((this.subTotal * 10) / 100);
    this.newSubtotal = this.subTotal - this.couponCodeOff;
    this.taxAmount = Math.floor((this.newSubtotal * 5) / 100);
    this.totalAmount = this.newSubtotal + this.taxAmount;
  }

  checkCart(){
    console.log(cartArray)
  }
  removeProduct(id: number){
    removeFromCart(id)
  }

  OrderProduct(msg: string){
    alert(msg);
  }

  applyCouponCode(coupon: any){
    if(coupon.value == "10off"){
      this.couponCodeOff = Math.floor((this.subTotal * 10) / 100);
      this.newSubtotal = this.subTotal - this.couponCodeOff;
    this.taxAmount = Math.floor((this.newSubtotal * 5) / 100);
    this.totalAmount = this.newSubtotal + this.taxAmount;
      
    } else if(coupon.value == "50off") {
      this.couponCodeOff = Math.floor((this.subTotal * 50) / 100);
      this.newSubtotal = this.subTotal - this.couponCodeOff;
    this.taxAmount = Math.floor((this.newSubtotal * 5) / 100);
    this.totalAmount = this.newSubtotal + this.taxAmount;
    }
    
    
  }

}
