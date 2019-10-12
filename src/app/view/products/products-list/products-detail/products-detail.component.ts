import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  id: any;
  constructor(private activeroute: ActivatedRoute) { }

  ngOnInit() {
    // this.user = {
    //   id: this.activeroute.snapshot.params['id'],
    //   name: this.activeroute.snapshot.params['name']
    // };
    this.activeroute.params.subscribe((params: Params) => {
      this.id = params["id"];
      console.log("this.id", this.id);
      
    })
  }

}
