import { Component, inject, Input } from '@angular/core';
import { Product } from '../../types/product';
import { MatButtonModule, MatIconAnchor, MatIconButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { WishlistService } from '../../services/wishlist.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatIconModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: Product;
  wishlistService = inject(WishlistService);

  get sellingPrice() {
    return Math.round(this.product.price - (this.product.price * this.product.discount) / 100);
  }

  addToWishList(product: Product) {
    console.log(product);
    if (this.isInWishList(product)) {
      this.wishlistService
        .removeFromWishList(product._id!)
        .subscribe(() => {
          this.wishlistService.init();
        });
    } else {
      this.wishlistService
        .addInWishList(product._id!)
        .subscribe(() => {
          this.wishlistService.init();
        });
    }
  }

  isInWishList(product: Product) {
    let isExists = this.wishlistService.wishlist.find(
      (x) => x._id == product._id
    );
    return !!isExists;
  }

  cartService = inject(CartService);

  addToCart(product: Product) {
    console.log(product);
      if (!this.isProductInCart(product._id!)) { //validar se o produto esta no carrinho
      this.cartService.addToCart(product._id!, 1).subscribe(() => { //caso n esteja vai ser adicionado
        this.cartService.init();
      });
    } else { //se ja estiver no carrinho removo ele 
      this.cartService.removeFromCart(product._id!).subscribe(() => {
        this.cartService.init();
      });
    }
  }

  isProductInCart(productId: string) {
    if (this.cartService.items.find((x) => x.product._id == productId)) { 
      // Verifico se o produto com o productId passado já está no carrinho
      return true;
    } else {
      return false;
    }
  }  
}
