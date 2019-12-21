import { TestBed } from '@angular/core/testing';
import { Item } from "./item";

import { CartHandlerService } from './cart-handler.service';

describe('CartHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartHandlerService = TestBed.get(CartHandlerService);
    expect(service).toBeTruthy();
  });

  it('should try to get localdata', () => {
    const service: CartHandlerService = TestBed.get(CartHandlerService);
    expect(service.localDataTested).toBe(true);
  });

  it('should add an Item', () => {
    let service: CartHandlerService = TestBed.get(CartHandlerService);

    service.emptyCart();

    let itemToAdd = new Item(2,
      'Ball',
      25,
      "fake description",
      ["assets/img/ball.jpg"]
    )

    let currentItemNumber = service.getCart().length;
    service.addItem(itemToAdd);

    let newItemNumber = service.getCart().length;
    expect(newItemNumber>currentItemNumber).toBe(true);
  });

  it('should remove an Item', () => {
    let service: CartHandlerService = TestBed.get(CartHandlerService);
    service.emptyCart();

    let itemToAdd1 = new Item(2,
      'Ball',
      25,
      "fake description",
      ["assets/img/ball.jpg"]
    )
    let itemToAdd2 = new Item(3,
      'Moutain Bike',
      1550.99,
      "fake description",
      ["assets/img/mountainBike1.jpg","assets/img/mountainBike2.jpg"]
    )

    service.addItem(itemToAdd1);
    service.addItem(itemToAdd2);
    let currentItemNumber = service.getCart().length;

    service.removeItem(2);      //need ID to remove
    let newItemNumber = service.getCart().length;

    expect(newItemNumber<currentItemNumber).toBe(true);
  });


  it('should increment an Item quantity', () => {
    let service: CartHandlerService = TestBed.get(CartHandlerService);

    service.emptyCart();

    let itemToAdd = new Item(2,
      'Ball',
      25,
      "fake description",
      ["assets/img/ball.jpg"]
    )
    service.addItem(itemToAdd);
    let quantity = service.getItemInCartById(2).quantity;

    service.addItem(itemToAdd);
    let newQuantity = service.getItemInCartById(2).quantity;

    service.addOne(2);    //add is by ID
    let thirdQuantity = service.getItemInCartById(2).quantity;

    expect(quantity==1 && newQuantity==2 && thirdQuantity==3).toBe(true);
  });

  it('should decrement an Item quantity', () => {
    let service: CartHandlerService = TestBed.get(CartHandlerService);

    service.emptyCart();

    let itemToAdd = new Item(2,
      'Ball',
      25,
      "fake description",
      ["assets/img/ball.jpg"]
    )
    service.addItem(itemToAdd);
    service.addItem(itemToAdd);
    let quantity = service.getItemInCartById(2).quantity;

    service.removeOne(2);
    let newQuantity = service.getItemInCartById(2).quantity;

    expect(quantity==2 && newQuantity==1).toBe(true);
  });



});
