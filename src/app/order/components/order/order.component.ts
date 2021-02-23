import { Component, OnInit } from '@angular/core';

import { Product } from "./../../../core/models/product.model";
import { CartService } from "../../../core/services/cart.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(
    private cartservice: CartService
  ) {
    this.products$ = this.cartservice.cart$;
  }

  ngOnInit(): void {
  }

}
