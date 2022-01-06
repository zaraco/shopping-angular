import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Product} from "../../types/product.type";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  count: number = 0;
  totalPrice: number = 0;

  constructor(
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    this.updateView();
  }

  updateView() {
    this.products = this.cartService.get();
    this.count = this.cartService.getCount();
    this.totalPrice = this.cartService.getPrice();
  }

  removeAll() {
    this.cartService.removeAll();
    this.updateView();
  }
}
