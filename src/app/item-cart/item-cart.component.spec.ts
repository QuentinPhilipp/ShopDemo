import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { CartHandlerService} from '../cart-handler.service';
// import { Item } from "../item";
import { ItemCartComponent } from './item-cart.component';

describe('ItemCartComponent', () => {
  let component: ItemCartComponent;
  let fixture: ComponentFixture<ItemCartComponent>;
  // let cartService: CartHandlerService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //
  // it('should increment quantity when addOne() is called', () => {
  //   //empty cartService
  //   cartService.emptyCart();
  //   component.Id = 2;
  //   let itemToAdd = new Item(2,
  //     'Ball',
  //     25,
  //     "fake description",
  //     ["assets/img/ball.jpg"]
  //   )
  //   cartService.addItem(itemToAdd);
  //   let quantity = cartService.getItemInCartById(2).quantity;
  //
  //   component.addOne();
  //   let newQuantity = cartService.getItemInCartById(2).quantity;
  //   expect(quantity==1 && newQuantity==2).toBe(true);
  // });

});
