import { Component, OnInit } from '@angular/core';
import {ItemManagerService} from "../item-manager.service"


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  items;
  interrestingItem;

  constructor(private itemService :ItemManagerService)
  {
  }

  ngOnInit() {
    this.items = this.itemService.getAllItems();
    console.log(this.items);
    this.getInterestingItem();
  }


  getInterestingItem()
  {
    //use a bit of magic to determine which item can be interresting
    let max=4;
    let min=2;

    let num = Math.floor(Math.random() * (max - min + 1)) + min;


    //we don't want to shuffle all of the item.
    this.interrestingItem = [...this.items];

    // Shuffle the array
    const shuffled = this.interrestingItem.sort(() => 0.5 - Math.random());

    // Get sub-array of first n elements
    let selected = shuffled.slice(0, num);

    this.interrestingItem = selected;
  }

}
