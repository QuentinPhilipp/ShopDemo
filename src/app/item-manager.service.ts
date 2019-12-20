import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemManagerService {

    fakeDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


    items = [
      { id: 1, name: 'Snowboard' ,price : 450, desc:this.fakeDesc, photos: ["assets/img/snowboard1.jpg","assets/img/snowboard2.jpg"]},
      { id: 2, name: 'Ball', price : 25, desc:this.fakeDesc, photos: ["assets/img/ball.jpg"]},
      { id: 3, name: 'Moutain Bike',price : 1550, desc:this.fakeDesc, photos: ["assets/img/mountainBike1.jpg","assets/img/mountainBike2.jpg"]},
      { id: 4, name: 'Running Shoes' ,price : 69.95, desc:this.fakeDesc, photos: ["assets/img/runningShoes1.jpg","assets/img/runningShoes2.jpg"]},
      { id: 5, name: 'Football TShirt' ,price : 70, desc:this.fakeDesc, photos: ["assets/img/tshirt1.jpg","assets/img/tshirt2.jpg","assets/img/tshirt3.jpg"]},
      { id: 6, name: 'Smart Watch' ,price : 250, desc:this.fakeDesc, photos: ["assets/img/watch1.jpg","assets/img/watch2.jpg","assets/img/watch3.jpg"]},
      { id: 7, name: 'Sport Bag' ,price : 60, desc:this.fakeDesc, photos: ["assets/img/sportBag.jpg"]},
      { id: 8, name: 'Backpack' ,price : 80, desc:this.fakeDesc, photos: ["assets/img/backpack1.jpg","assets/img/backpack2.jpg","assets/img/brokenLink.jpg"]},
      { id: 9, name: 'Sport Camera' ,price : 30, desc:this.fakeDesc, photos: ["assets/img/camera.jpg"]}
    ];

    errorItem = { id: 0, name: 'Error', price : -1, desc:"Test de description",photos: ["assets/img/error.jpg","assets/img/error.jpg"]}


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
