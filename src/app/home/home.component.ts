import { Component, OnInit } from '@angular/core';
import {ItemManagerService} from "../item-manager.service"


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  items;

  constructor(private itemService :ItemManagerService)
  {
  }

  ngOnInit() {
    this.items = this.itemService.getAllItems();
  }

}
