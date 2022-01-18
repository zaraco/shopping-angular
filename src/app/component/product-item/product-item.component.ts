import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../types/product.type';
import { WishListService } from '../../services/wish-list.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() product: Product | undefined;
  @Input() hasButton: boolean = true;
  @Input() hasRemoveButton: boolean = false;
  @Output() removeItemEvent = new EventEmitter<Product>();

  constructor(
    private cartService: CartService,
    private wishListService: WishListService
  ) {}

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }

  addToWishList() {
    if (this.product) {
      this.wishListService.addToWishList(this.product);
    }
  }

  removeFromWishList() {
    if (this.product) {
      this.wishListService.removeItem(this.product);
    }
  }
  isProductInWishList(): boolean {
    if (this.product) {
      return this.wishListService.isProductInWishList(this.product);
    }
    return false;
  }

  removeItem() {
    if (this.product) {
      this.removeItemEvent.emit(this.product);
    }
  }
}
