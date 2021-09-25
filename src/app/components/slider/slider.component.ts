import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  ngOnInit(): void {
  }

  public images: any = [
    {"description": "asdas", "title" : "abc" ,"img": "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTI5MTk2Ng&ixlib=rb-1.2.1&q=80&w=1400"},
    {"description": "asdas", "title" : "abc" ,"img": "https://images.unsplash.com/photo-1532635241-17e820acc59f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTI5MTk2Ng&ixlib=rb-1.2.1&q=80&w=1400"},
    {"description": "asdasd", "title" : "abc" ,"img": "https://images.unsplash.com/photo-1523464862212-d6631d073194?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTI5MTk4Ng&ixlib=rb-1.2.1&q=80&w=1400"},
    {"description": "asdsd", "title" : "abc" ,"img": "https://images.unsplash.com/photo-1630780059931-d8c775442b52?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMTI5MTk4Ng&ixlib=rb-1.2.1&q=80&w=1400"}
  ]
  constructor() {
    // this.getNewImage()
    // this.getNewImage()
    // this.getNewImage()
  }


  // public getNewImage(){
  //   let img = ""
  //   let sig = (Math.floor(Math.random()*10))
  //   fetch("https://source.unsplash.com/random/1400x600?sig="+sig).then(resp => {
  //     this.images.push(resp.url)
  //   });
  // }

}
