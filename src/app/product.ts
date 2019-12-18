import { Item } from "./item"

export class Product {
  item : Item;
  quantity : number;
  totalPrice : number;

  constructor(item: Item,quantity:number)
  {
    this.item = item;
    this.quantity = quantity;

    this.totalPrice=this.item.price*this.quantity;
  }


  updatePrice()
  {
    this.totalPrice=this.item.price*this.quantity;
  }
}
