import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  @Input() pid = "";
  @Input() title = '';
  @Input() img = '';
  @Input() price = '';
  @Input() discount = '';
  public stars: any = Array(Math.floor(Math.random() * (5 - 1 + 1)) + 1);
  constructor() {
    console.log(this.stars)
  }

  ngOnInit(): void {
  }

}
