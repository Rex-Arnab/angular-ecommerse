import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { Page404Component } from './errorPage/page404/page404.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [{
      path: "",
      pathMatch: "full",
      redirectTo: "/home"
    },{
      path: 'home',
      component: HomeComponent
    },{
      path: 'about',
      component: AboutComponent
    },{
      path: 'product',
      pathMatch: 'full',
      component: ProductComponent
    },{
      path: 'product/:id',
      component: ShopComponent
    },{
      path: 'login',
      component: LoginComponent
    },{
      path: 'cart',
      component: CartComponent
    },{
      path: 'order',
      component: OrderComponent
    },{
      path: '**',
      component: Page404Component
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
