import { Routes } from '@angular/router';
import { SinginComponent } from './view/singin/singin.component';
import { HomeComponent } from './view/home/home.component';
import { AddProductsComponent } from './view/products/add-products/add-products.component';
import { ProductsListComponent } from './view/products/products-list/products-list.component';
import { EditProductsComponent } from './view/products/edit-products/edit-products.component';
import { ProductsDetailComponent } from './view/products/products-list/products-detail/products-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuardService } from './services/auth-guard.service';
export const rootRouterConfig: Routes = [
    {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
    },
    { path: 'signin', component: SinginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'add-products', component: AddProductsComponent },
    // { path: 'add-products', canActivate: [AuthGuardService], component: AddProductsComponent },
    { path: 'edit-products/:id/:name', component: EditProductsComponent },
    { path: 'products-list', component: ProductsListComponent, children: [
        { path: ':id/:name', component: ProductsDetailComponent }
    ]},
    { path: 'pagenotfound', component: PagenotfoundComponent },
    { path: '**', redirectTo: '/pagenotfound'},
    // { path: 'product-detail/:id/edit', component: ProductsDetailComponent },
];
