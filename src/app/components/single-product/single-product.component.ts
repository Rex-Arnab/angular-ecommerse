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
  constructor() { }

  ngOnInit(): void {
  }

}
