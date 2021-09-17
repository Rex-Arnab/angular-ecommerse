import { Component, OnInit } from '@angular/core';
import data from "src/app/data"

@Component({
  selector: 'app-product-card',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public product: any = data
  constructor() { }

  ngOnInit(): void {
  }

}
