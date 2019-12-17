import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CartComponent } from './cart/cart.component';
import { CartHandlerService } from "./cart-handler.service"
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemCartComponent } from './item-cart/item-cart.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'cart',component: CartComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    CartComponent,
    HomeComponent,
    ItemCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CartHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
