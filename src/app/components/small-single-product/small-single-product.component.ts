import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-single-product',
  templateUrl: './small-single-product.component.html',
  styleUrls: ['./small-single-product.component.css']
})
export class SmallSingleProductComponent implements OnInit {

  @Input() pid = "";
  @Input() title = '';
  @Input() img = '';
  @Input() price = '';
  @Input() discount = '';
  public stars: any = Array(Math.floor(Math.random() * (5 - 1 + 1)) + 1);

  constructor() {
    console.log(this.img)
  }

  ngOnInit(): void {
  }

}
