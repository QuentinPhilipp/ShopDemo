import { Component, OnInit } from '@angular/core';
import { Item } from "../item"
import { Product} from "../product"
import { CartHandlerService } from "../cart-handler.service"
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // itemsID: Array<number>;
  // items = ITEMS;

  cartList: Product[] = [];
  total =0;
  _subscription;



  // cartList: Item[] = [{ id: 11, name: 'Banana', price : 30, photo : "assets/img/banana.jpg", defaultPhoto:"/src/1.jpg", desc:"Test de description"},
  // { id: 12, name: 'Apple',price : 30, photo : "assets/img/apple.jpg", defaultPhoto:"/src/1.jpg", desc:"Test de description"},
  // { id: 13, name: 'Strawberry' ,price : 30, photo : "assets/img/strawberry.jpg", defaultPhoto:"/src/1.jpg", desc:"Test de description"}];


  constructor(private cartService: CartHandlerService) {
    // this.itemsID=this.cartService.items;
    // console.log(this.itemsID);


    this.cartList=this.cartService.cartProductList;
    this.total = this.cartService.totalPrice;

    this._subscription = cartService.totalChange.subscribe((value) => {
    this.total = value;
    });

    console.log(this.cartList);

  }

  ngOnInit() {
    window.scrollTo(0, 0)
  }

  updatePrice()
  {
    console.log("Update total price");
  }


}
