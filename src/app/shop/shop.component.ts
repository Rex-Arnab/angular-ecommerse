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

  ngOnInit(): void {
    this.pid = this.router.snapshot.paramMap.get("id");
    data.forEach((prod: any) => {
      if(prod.id == this.pid){
        this.product = prod
        console.log(this.product)
      }
    })
  }

}
