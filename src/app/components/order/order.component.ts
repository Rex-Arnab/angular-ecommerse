import { Component, OnInit } from '@angular/core';
import {addToCart, cartArray}  from '../../cartData'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public products: any;

  constructor(private _title: Title) {
    this._title.setTitle('Order');
  }

  ngOnInit(): void {
    this.products = cartArray;
  }

  checkCart(){
    console.log(cartArray)
  }

}
