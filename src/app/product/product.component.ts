import { Component, OnInit } from '@angular/core';
import data from "src/app/data"
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-product-card',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  private _data: any = data;
  public product: any = this._data;
  constructor(private _title: Title) {
    this._title.setTitle('Product');
  }

  ngOnInit(): void {
  }

  changeOrder(field: any){
    if(field.value == 'lowestprice'){
      this.product = this.product.sort()
    } else if(field.value == 'highestprice'){
      this.product = this.product.sort().reverse()
    }
  }

  changeGender(gender: string){
    if(gender == 'Select'){
      this.product = this._data;
      return
    }
    this.product = this._data.filter((prod: any) => prod.category == gender)
  }

  changeSize(product_size: string){
    if(product_size == 'ALL'){
      this.product = this._data;
      return
    }
    this.product = this.product.filter((prod: any) => prod.size.includes(product_size))
  }

}
