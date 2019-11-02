import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  genders = [ 'male', 'female'];
  addProduct: FormGroup;
  constructor() { }

  ngOnInit() {
    this.addProduct = new FormGroup({
      'name' : new FormControl(null),
      'price' : new FormControl(null),
      'gender' : new FormControl('male'),
    });
  }
}
