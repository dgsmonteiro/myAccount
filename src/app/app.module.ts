import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProfileInformationsComponent } from './pages/profile-informations/profile-informations.component';
import { AdressListComponent } from './pages/adress-list/adress-list.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';
import { ProductComponent } from './components/product/product.component';
import { AccountComponent } from './components/account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileInformationsComponent,
    AdressListComponent,
    OrderHistoryComponent,
    WishListComponent,
    ProductComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
