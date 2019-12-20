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

  checkInCart(itemToFind :Item) : number
  {
    this.myCart=this.cartService.getCart();
    for(let product of this.myCart)
    {
      // console.log("product",product.item.id);
      // console.log("item",itemToFind.id);

      // console.log(product.item.id == itemToFind.id);

      if(product.item.id == itemToFind.id)
      {
        // console.log("Equal");
        return product.quantity;
      }
    }
    return 0;
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
