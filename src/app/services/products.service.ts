import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() { }
  private product_data = [
    {
      id: 1,
      name: 'graps',
      price: '24kg',
      detail : 'Fresh',
    },
    {
      id: 1,
      name: 'banana',
      price: '22kg',
      detail : 'Fresh',
    }
  ];
  productslist() {
    return this.product_data;
  }
}
