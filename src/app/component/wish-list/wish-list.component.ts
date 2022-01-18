import { Component, OnInit } from '@angular/core';
import { Product } from '../../types/product.type';
import { WishListService } from '../../services/wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent implements OnInit {
  products: Product[] = [];

  constructor(private wishListService: WishListService) {}

  ngOnInit(): void {
    this.products = this.wishListService.get();
  }
}
