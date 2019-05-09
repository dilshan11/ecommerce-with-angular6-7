import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminComponent } from './admin/admin/admin.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AuthguardService } from './authguard.service';
import { AdminguardService } from './adminguard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { OrderDetailsComponent } from './admin/order-details/order-details.component';

const routes: Routes = [
  {path:'',component:ProductsComponent},
  {path:'products',component:ProductsComponent},
  {path:'shopping-cart',component:ShoppingCartComponent,canActivate:[AuthguardService]},
  {path:'login',component:LoginComponent},

  {path:'check-out',component:CheckOutComponent,canActivate:[AuthguardService]},
  {path:'my/orders',component:MyOrdersComponent ,canActivate:[AuthguardService]},
  {path:'order-success',component:OrderSuccessComponent ,canActivate:[AuthguardService]},

  {path:'admin/orderdetails/:id',component:OrderDetailsComponent,canActivate:[AuthguardService]},
  {path:'admin/products/new',component:ProductFormComponent ,canActivate:[AuthguardService]},
  {path:'admin/products/:id',component:ProductFormComponent,canActivate:[AuthguardService]},
  {path:'admin/products',component:AdminProductsComponent ,canActivate:[AuthguardService]},
  {path:'admin/orders',component:AdminComponent ,canActivate:[AuthguardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
