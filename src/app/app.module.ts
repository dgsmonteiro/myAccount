import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ClientComponent } from './components/client/client.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AddressComponent } from './pages/address/address.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { ProductComponent } from './components/product/product.component';
import { WhishlistComponent } from './components/whishlist/whishlist.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ProfileComponent,
    AddressComponent,
    OrdersComponent,
    WishlistComponent,
    ProductComponent,
    WhishlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
