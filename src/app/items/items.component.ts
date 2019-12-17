import { Component, OnInit } from '@angular/core';
import {CartComponent} from '../cart/cart.component';
import { Item } from "../item"
import { CartHandlerService }from "../cart-handler.service"


import { ITEMS } from '../myItemList';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {


  items = ITEMS;

  constructor(private cartService :CartHandlerService)
  {

  }

  ngOnInit() {

  }

  onClickMe(item: Item):void
  {
    this.cartService.addItem(item);
  }

}
