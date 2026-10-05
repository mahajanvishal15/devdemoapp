import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';

export const routes: Routes = [
    {path: '', redirectTo: '/catalog', pathMatch: 'full'},
    {path: 'catalog', component: CatalogComponent},
    {path: 'cart', component: CartComponent},
];
