import { Routes } from '@angular/router';
import { SinginComponent } from './view/singin/singin.component';
import { HomeComponent } from './view/home/home.component';
import { AddProductsComponent } from './view/products/add-products/add-products.component';
import { ProductsListComponent } from './view/products/products-list/products-list.component';
import { EditProductsComponent } from './view/products/edit-products/edit-products.component';
import { ProductsDetailComponent } from './view/products/products-list/products-detail/products-detail.component';
export const rootRouterConfig: Routes = [
    { path: '', component: SinginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'add-products', component: AddProductsComponent },
    { path: 'edit-products', component: EditProductsComponent },
    { path: 'products-list', component: ProductsListComponent },
    { path: 'product-detail/:id', component: ProductsDetailComponent},
];
