import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: any;
  constructor( private productList: ProductsService,
               private router: Router
             ) { }
  ngOnInit() {
    this.products = this.productList.productslist();
  }
    addProduct() {
      this.router.navigate(['/add-products']);
    }
    editrouter(id, name) {
      this.router.navigate(['/edit-products/' + id + '/' +  name + '']);
    }
  }
