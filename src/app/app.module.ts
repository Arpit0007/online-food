import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
// import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './view/header/header.component';
import { SidebarComponent } from './view/sidebar/sidebar.component';
import { FooterComponent } from './view/footer/footer.component';
import { SinginComponent } from './view/singin/singin.component';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './view/home/home.component';
import { AddProductsComponent } from './view/products/add-products/add-products.component';
import { ProductsListComponent } from './view/products/products-list/products-list.component';
import { EditProductsComponent } from './view/products/edit-products/edit-products.component';
import { ProductsDetailComponent } from './view/products/products-list/products-detail/products-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    SinginComponent,
    HomeComponent,
    AddProductsComponent,
    ProductsListComponent,
    EditProductsComponent,
    ProductsDetailComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    LoginService, AuthGuardService, AuthService
    // {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
