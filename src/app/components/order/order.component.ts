import { Component, OnInit } from '@angular/core';
import {addToCart, cartArray}  from '../../cartData'
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  checkCart(){
    console.log(cartArray)
  }

}
