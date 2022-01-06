import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Product} from "../../types/product.type";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product | undefined;
  @Input() hasButton: boolean = true;

  constructor(
    private cartService: CartService
  ) { }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }

  ngOnInit(): void {
  }

}
