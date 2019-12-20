import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CartComponent } from './cart/cart.component';
import { CartHandlerService } from "./cart-handler.service";
import {ItemManagerService} from "./item-manager.service";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemCartComponent } from './item-cart/item-cart.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { CookieService } from 'ngx-cookie-service'


const appRoutes: Routes = [
  { path: 'product', component: HomeComponent },
  { path: '*', redirectTo: 'product' },
  { path: 'product/:id', component: SingleProductComponent },
  { path: 'cart',component: CartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    CartComponent,
    HomeComponent,
    ItemCartComponent,
    SingleProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CartHandlerService,
    ItemManagerService,
    CookieService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
