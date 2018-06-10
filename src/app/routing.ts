import { Routes, RouterModule } from '@angular/router';

import { Page404Component } from './pages/page404/page404.component';
import { ProfileInformationsComponent } from './pages/profile-informations/profile-informations.component';
import { AdressListComponent } from './pages/adress-list/adress-list.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';

const rotasDaApp: Routes = [
    {path: '', component: ProfileInformationsComponent},
    {path: 'adress-list', component: AdressListComponent},
    {path: 'order-history', component: OrderHistoryComponent},
    {path: 'wish-list', component: WishListComponent},
    {path: '**', component: Page404Component }
];

export const roteamento = RouterModule.forRoot(rotasDaApp);