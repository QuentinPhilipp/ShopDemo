// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { Item } from "../item"
// import { ItemsComponent } from './items.component';
//
// describe('ItemsComponent', () => {
//   let component: ItemsComponent;
//   let fixture: ComponentFixture<ItemsComponent>;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ ItemsComponent ]
//     })
//     .compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(ItemsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//
//   it('should return the quantity of this item in the cart', () => {
//     let itemToCheck = new Item(2,
//       'Ball',
//       25,
//       "Short description",
//       ["assets/img/ball.jpg"]
//     )
//
//     let nb = component.checkInCart(itemToCheck);
//     console.log("nb:",nb);
//
//     expect(nb>0).toBeTruthy();
//   });
//
// });
