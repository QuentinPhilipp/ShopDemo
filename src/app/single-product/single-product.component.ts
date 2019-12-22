import { Component, OnInit } from '@angular/core';
import { Item } from "../item"
import {ItemManagerService} from "../item-manager.service";
import { CartHandlerService }from "../cart-handler.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  name: string = 'DefaultItem';
  price: number = -1;
  photos:string[];
  desc:string;
  item:Item
  myCart;

  constructor( private itemService :ItemManagerService,
                private route: ActivatedRoute,
              private cartService:CartHandlerService)
  {
      this.myCart=cartService.cartProductList;
  }

  ngOnInit() {
      const id = this.route.snapshot.params['id'];
      this.item = this.itemService.getItemById(id);

      this.price = this.item.price;
      this.name = this.item.name;
      this.photos = this.item.photos;
      this.desc = this.item.desc;

      // ////console.log(this.photos);
  }

  onClickMe():void
  {
    this.cartService.addItem(this.item);
    this.myCart=this.cartService.cartProductList;
  }

  getOtherPhotos()
  {
    //Return all of the photo except the first one
    let newList = [];
    for(let photoIndex in this.photos)
    {
      if(parseInt(photoIndex)!=0)
      {
        newList.push(this.photos[photoIndex]);
      }
    }
    return newList;
  }


}
