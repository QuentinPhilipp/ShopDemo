import { Component, OnInit,Input } from '@angular/core';
import {CartComponent} from '../cart/cart.component';
import { Item } from "../item"
import { CartHandlerService }from "../cart-handler.service"
import {ItemManagerService} from "../item-manager.service"

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input() item;
  myCart;

  constructor(private cartService:CartHandlerService)
  {
    this.myCart=cartService.cartProductList;
  }

  ngOnInit() {

  }

  onClickMe():void
  {
    this.cartService.addItem(this.item);
    this.myCart=this.cartService.cartProductList;
  }

  checkInCart(item :Item) : boolean
  {
    // console.log("Check for item",item);
    this.myCart=this.cartService.cartProductList;
    // console.log("Cart",this.myCart);
    for(let product of this.myCart)
    {
      if(item==product.item)
      {
        // console.log("Return true");
        return true;
      }
    }
    // console.log("Return false");
    return false;
  }


  getNumber(item:Item)
  {
    // console.log(item);
    // console.log(this.myCart);
    this.myCart=this.cartService.cartProductList;
    for(let product of this.myCart)
    {
      if(item==product.item)
      {
        return product.quantity;
      }
    }
    return;
  }

}
