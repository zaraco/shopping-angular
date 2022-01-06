import {Injectable} from "@angular/core";
import {Product} from "../types/product.type";

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];

  addToCart(product: Product): void {
    this.cart.push(product);
    console.log(this.cart)
  }

  get(): Product[] {
    return this.cart;
  }

  getCount(): number {
    return this.cart.length
  }

  getPrice(): number {
    return this.cart.map((product) => product.price).reduce((a, b) => a+b , 0)
  }

  removeAll() {
    this.cart = []
  }

  removeItem(product: Product) {
    this.cart = this.cart.filter((item) => item.id !== product.id)
  }
}
