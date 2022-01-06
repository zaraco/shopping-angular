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
}
