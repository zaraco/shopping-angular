import { Injectable } from '@angular/core';
import { Product } from '../types/product.type';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  products: Product[] = [];

  addToWishList(product: Product): void {
    this.products.push(product);
    console.log(this.products);
  }

  isProductInWishList(product: Product): boolean {
    return this.products.find((item) => item.id === product.id) !== undefined;
  }

  get(): Product[] {
    return this.products;
  }

  removeAll() {
    this.products = [];
  }

  removeItem(product: Product) {
    this.products = this.products.filter((item) => item.id !== product.id);
  }
}
