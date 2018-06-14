import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProfileInformationsComponent } from './pages/profile-informations/profile-informations.component';
import { AdressListComponent } from './pages/adress-list/adress-list.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';
import { Page404Component } from './pages/page404/page404.component';
import { roteamento } from './routing';
import { AccountModule } from './components/account/account.module';
import { ProductModule } from './components/product/product.module';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    ProfileInformationsComponent,
    AdressListComponent,
    OrderHistoryComponent,
    WishListComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    roteamento,
    AccountModule,
    ProductModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDfPbNnfE5ktwmYBMuI_S7jH04khiAQomM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
