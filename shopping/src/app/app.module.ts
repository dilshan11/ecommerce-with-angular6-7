import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import{AngularFireModule}from 'angularfire2';
import{AngularFirestoreModule, AngularFirestore} from 'angularfire2/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminComponent } from './admin/admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import{ReactiveFormsModule}from'@angular/forms';
import { UserService } from './user.service';
import { AdminguardService } from './adminguard.service';
import { AuthguardService } from './authguard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategeoryService } from './categeory.service';
import { ProductService } from './product.service';
import { FormsModule } from '@angular/forms';
import { ShoppingCartService } from './shopping-cart.service';
import { OrderDetailsComponent } from './admin/order-details/order-details.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminComponent,
    LoginComponent,
    ProductFormComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthService,AuthguardService,UserService,AdminguardService,CategeoryService,ProductService,ShoppingCartService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
