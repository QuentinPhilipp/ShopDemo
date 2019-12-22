import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from "./item";
import { Product} from "./product"
import {ItemManagerService}from './item-manager.service'


@Injectable({
  providedIn: 'root'
})
export class CartHandlerService {

  cartProductList: Product[] = [];
  dataReceived = false;
  localDataTested = false;
  totalPrice = 0;
  totalChange: Subject<number> = new Subject<number>();


  constructor(private itemManager : ItemManagerService) {

    this.totalPrice=0;
    for(var prod of this.cartProductList)
    {
      this.totalPrice+=prod.item.price* prod.quantity;
    }
    this.getData();
    this.updateCart();
    // this.cartProductList=getData;
  }


  saveData() {
    localStorage.setItem("myCart", JSON.stringify(this.cartProductList));
  }

  getData() {
    var returnValue = JSON.parse(localStorage.getItem("myCart"));
    this.localDataTested=true;
    if(returnValue!=null)
    {
      this.dataReceived=true;
      for(let prod of returnValue)
      {
        let newProd = new Product(prod.item,prod.quantity)
        this.cartProductList.push(newProd);
      }
    }
    //console.log("Get data : ",this.cartProductList);
  }

  updateCart(){
    this.totalPrice=0;
    for(var prod of this.cartProductList)
    {
      this.totalPrice+=prod.item.price* prod.quantity;
    }

    this.saveData();

    this.totalChange.next(this.totalPrice);
  }

  ngOnInit()
  {

  }

  addItem(item)
  {
    //check if already in
    var flag = false;
    for(var product of this.cartProductList)
    {
      if(product.item.id == item.id)
      {
        // console.log("Already in list");
        product.quantity+=1;
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
    // console.log("Add Item");
    // console.log(this.cartProductList);
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


  getCart()
  {
    return this.cartProductList;
  }

  emptyCart()
  {
    this.cartProductList=[];
    this.saveData();
  }

  getItemInCartById(id)
  {
    var i;
    for(i=0;i < this.cartProductList.length;i++)
    {
      if(this.cartProductList[i].item.id==id)
      {
        return this.cartProductList[i];
      }
    }
  }

}
