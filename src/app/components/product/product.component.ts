import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  name : string;
  description : string;
  images : [string];
  price : number;

  constructor(name : string, description : string, price : number, images: [string]) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.images = images
   }

  ngOnInit() {
  }

}
