import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from "./item";
import { Product} from "./product"
import {CookieService} from 'ngx-cookie-service';
import {ItemManagerService}from './item-manager.service'





@Injectable({
  providedIn: 'root'
})
export class CartHandlerService {

  cartProductList: Product[] = [];

  totalPrice = 0;
  totalChange: Subject<number> = new Subject<number>();


  constructor(private cookieService:CookieService,
            private itemManager : ItemManagerService) {

    let getData= this.cookieService.get('stored-cart');

    //fetch the data received from cookie
    //  "," between productID and quantity
    //  ";" between products
    let separatedItem = getData.split(';');
    separatedItem.pop();  //remove last elem(always empty)

    let testCart = [];
    for(let itemCookie of separatedItem)
    {
      let extractedCookie = itemCookie.split(',');
      let item = this.itemManager.getItemById(parseInt(extractedCookie[0]));
      let prod = new Product(item,parseInt(extractedCookie[1]));
      this.cartProductList.push(prod);
    }

    this.totalPrice=0;
    for(var prod of this.cartProductList)
    {
      this.totalPrice+=prod.item.price* prod.quantity;
    }


    // this.cartProductList=getData;
  }

  updateCart(){
    //creating a string of id to store the cart in cookie (Only get string)
    let str = "";
    for(let product of this.cartProductList)
    {
      str+=product.item.id.toString();      //storing ID
      str+=",";
      str+=product.quantity.toString();     //storing quantity
      str+=";";
    }
    console.log(str);

    this.totalPrice=0;
    for(var prod of this.cartProductList)
    {
      this.totalPrice+=prod.item.price* prod.quantity;
    }

    this.cookieService.set('stored-cart',str);

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
  }

  removeItem(id)
  {
    //remove in cartProductList product where item.id=id
    //find the elem
    var i;
    for(i=0;i < this.cartProductList.length;i++)
    {
      if(this.cartProductList[i].item.id==id)
      {
        this.totalPrice -= this.cartProductList[i].item.price * this.cartProductList[i].quantity;
        this.cartProductList.splice(i, 1);
      }
    }
    // delete this.cartProductList[index];
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
      }
    }
    this.updateCart();
  }


}
