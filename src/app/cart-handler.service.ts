import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from "./item";
import { Product} from "./product"



@Injectable({
  providedIn: 'root'
})
export class CartHandlerService {

  cartList: Item[] = [];


  cartProductList: Product[] = [];

  totalPrice = 0;
  totalChange: Subject<number> = new Subject<number>();



  constructor() {
    for(var item of this.cartList)
    {
      var prod = new Product(item,1);
      this.totalPrice+=prod.item.price;
      this.cartProductList.push(prod);
    }
  }

  updateCart(){
    this.totalChange.next(this.totalPrice);
  }

  ngOnInit()
  {

  }

  addItem(item)
  {
    // console.log("Item received");
    // console.log(item);
    //check if already in
    var flag = false;
    for(var product of this.cartProductList)
    {
      if(product.item.id == item.id)
      {
        // console.log("Already in list");
        product.quantity+=1;
        product.updatePrice();
        this.totalPrice += product.item.price;

        flag=true;
        break;
      }
      else
      {
        // console.log("New product");
      }
    }

    if(flag==false)   //add item
    {
      var prod = new Product(item,1);
      this.totalPrice += prod.item.price;
      this.cartProductList.push(prod);


    }

    this.updateCart();
    // this.itemList.push(item);
    // console.log(this.cartProductList);
  }

  removeItem(id)
  {
    console.log("Service Remove ",id);

    //remove in cartProductList product where item.id=id

    //find the elem
    let index =-1;
    for(let i in this.cartProductList)
    {
      if(this.cartProductList[i].item.id==id)
      {
        console.log("Found");
        index=i;
      }
    }
    // delete this.cartProductList[index];

    if (index > -1) {
      this.totalPrice -= this.cartProductList[index].item.price * this.cartProductList[index].quantity;
      this.cartProductList.splice(index, 1);
    }
    console.log("new List ",this.cartProductList);
    this.updateCart();


  }



  addOne(id) {
    //find the elem
    for(let product of this.cartProductList)
    {
      if(product.item.id==id)
      {
        product.quantity+=1;
        this.totalPrice += product.item.price;
        product.updatePrice();
      }

      console.log("New price : ",this.totalPrice)
    }
    this.updateCart();
  }

  removeOne(id) {
    for(let product of this.cartProductList)
    {
      if(product.item.id==id)
      {
        product.quantity-=1;
        this.totalPrice -= product.item.price;
        product.updatePrice();


        if(product.quantity==0)
        {
          this.removeItem(product.item.id);
        }

        console.log("New price : ",this.totalPrice)
      }
    }
    this.updateCart();
  }


}
