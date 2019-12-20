import { Component, OnInit,Input } from '@angular/core';
import { CartHandlerService } from "../cart-handler.service"


@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.css']
})
export class ItemCartComponent implements OnInit {

  @Input() Price : number;
  @Input() Name : string;
  @Input() Quantity : number;
  @Input() Id : number;
  @Input() TotalPrice : number;

  // cartService:CartHandlerService;
  // cartService;

  constructor(private cartService: CartHandlerService)
  {
    // this.cartService = cartService;

  }


  ngOnInit() {
  }


  onClickMe() {
    console.log("Remove : ",this.Id);
    this.cartService.removeItem(this.Id);
  }


  addOne() {
    console.log("add one : ",this.Id);
    this.cartService.addOne(this.Id);
  }

  removeOne() {
    console.log("Remove one : ",this.Id);
    this.cartService.removeOne(this.Id);
  }

}
