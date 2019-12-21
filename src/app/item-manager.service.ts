import { Injectable } from '@angular/core';
import {Item} from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemManagerService {

    fakeDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    //it is possible to add for each product a description

    items : Item[] =[
        new Item(1,
        'Snowboard',
        450,
        this.fakeDesc,
        ["assets/img/snowboard1.jpg","assets/img/snowboard2.jpg"]
      ),
      new Item(2,
        'Ball',
        25,
        "Short description",
        ["assets/img/ball.jpg"]
      ),
      new Item(3,
        'Moutain Bike',
        1550.99,
        this.fakeDesc,
        ["assets/img/mountainBike1.jpg","assets/img/mountainBike2.jpg"]
      ),
      new Item(4,
          'Running Shoes',
          69.95,
          this.fakeDesc,
          ["assets/img/runningShoes1.jpg","assets/img/runningShoes2.jpg"]
      ),
      new Item(5,
        'Football TShirt',
        70,
        this.fakeDesc,
        ["assets/img/tshirt1.jpg","assets/img/tshirt2.jpg","assets/img/tshirt3.jpg"]
      ),
      new Item(6,
        'Smart Watch',
        250,
        this.fakeDesc,
        ["assets/img/watch1.jpg","assets/img/watch2.jpg","assets/img/watch3.jpg"]
      ),
      new Item(7,
        'Sport Bag',
        60,
        this.fakeDesc,
        ["assets/img/sportBag.jpg"]
      ),
      new Item(8,
        'Backpack',
        80,
        this.fakeDesc,
        ["assets/img/backpack1.jpg","assets/img/backpack2.jpg","assets/img/backpack3.jpg"]
      ),
      new Item(9,
        'Sport Camera',
        30,
        this.fakeDesc,
        ["assets/img/camera.jpg"]
      )
    ];

    errorItem = new Item(0,'Error',-1,"Description of the ErrorItem",["assets/img/error.jpg","assets/img/error.jpg"])


  constructor() { }

  getItemById(id: number) {

    for(let item of this.items)
    {
      if(item.id==id)
      {
        return item;
      }
    }
    return this.errorItem;
  }

  getAllItems() {
    return this.items;
  }

}
