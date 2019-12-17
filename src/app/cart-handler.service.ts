import { Injectable } from '@angular/core';
import { Item } from "./item";
import { Product} from "./product"


@Injectable({
  providedIn: 'root'
})
export class CartHandlerService {

  cartList: Item[] = [{ id: 11, name: 'Banana', price : 30, photo : "assets/img/banana.jpg", defaultPhoto:"/src/1.jpg", desc:"Test de description"},
  { id: 12, name: 'Apple',price : 30, photo : "assets/img/apple.jpg", defaultPhoto:"/src/1.jpg", desc:"Test de description"},
  { id: 13, name: 'Strawberry' ,price : 30, photo : "assets/img/strawberry.jpg", defaultPhoto:"/src/1.jpg", desc:"Test de description"}];


  cartProductList: Product[] = [];

  constructor() {
    for(var item of this.cartList)
    {
      var prod = new Product(item,1);
      this.cartProductList.push(prod);
    }

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
      this.cartProductList.push(prod);
    }


    // this.itemList.push(item);
    // console.log(this.cartProductList);
  }

  removeItem(id)
  {
    console.log("Service Remove ",id);

    //remove in cartProductList product where item.id=id

    //find the elem
    var index =-1;
    for(var i in this.cartProductList)
    {
      if(this.cartProductList[i].item.id==id)
      {
        console.log("Found");
        index=i;
      }
    }
    // delete this.cartProductList[index];

    if (index > -1) {
       this.cartProductList.splice(index, 1);
    }
    console.log("new List ",this.cartProductList);

  }


}
