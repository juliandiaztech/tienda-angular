import { Injectable } from '@angular/core';
import {Product} from '../../models/product.model';
import { HttpClient } from '@angular/common/http';

import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [];

  constructor(
    private http: HttpClient
  ) { }


  getAllProducts() {
    return this.http.get<Product[]>(`${environment.url_api}/products`);
  }
  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  // crear un producto

  createProduct(product: Product) {
    return this.http.post(`${environment.url_api}/products`, product);
  }

  // edicion de un producto
  updateProduct(id: string, changes: Partial<Product> ){
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }

  // eliminar un producto
  deleteProduct(id: string){
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }
}
