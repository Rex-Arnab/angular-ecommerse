import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from "src/app/data"

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(public router:ActivatedRoute) { }
  public pid: (string|null) = "";
  public product: any = {}

  public mainImage: string = '';
  public quantity: number = 1;

  ngOnInit(): void {
    this.pid = this.router.snapshot.paramMap.get("id");
    data.forEach((prod: any) => {
      if(prod.id == this.pid){
        this.product = prod;
        this.mainImage = prod.main_img;
      }
    })
  }

  changeImage(image: string){
    this.mainImage = image;
  }

  changeQuantity(action: string){
    if(action === 'add'){
      this.quantity++;
    } else if(action === 'subtract'){
      this.quantity--;
    }
  }

}
