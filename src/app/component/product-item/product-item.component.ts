import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Input() hasRemoveButton: boolean = false;
  @Output() removeItemEvent = new EventEmitter<Product>();

  constructor(
    private cartService: CartService
  ) {
  }

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }

  ngOnInit(): void {
  }

  removeItem() {
    if (this.product) {
      this.removeItemEvent.emit(this.product);
    }
  }
}
