import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SliderComponent } from './components/slider/slider.component';
import { Page404Component } from './errorPage/page404/page404.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { OrderComponent } from './components/order/order.component';
import { SmallSingleProductComponent } from './components/small-single-product/small-single-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ShopComponent,
    CartComponent,
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    SliderComponent,
    Page404Component,
    SingleProductComponent,
    OrderComponent,
    SmallSingleProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
