import { Component, inject } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types/product';
import { MatButtonModule } from '@angular/material/button';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsComponent } from '../manage/products/products.component';
import { WishlistService } from '../../services/wishlist.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatButtonModule, ProductCardComponent, MatIconModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  customerService=inject(CustomerService);
  route=inject(ActivatedRoute);
  product!:Product;
  mainImage!:string;
  similarProducts:Product[]=[];
  ngOnInit(){
    this.route.params.subscribe((x:any)=>{
      this.getProductDetail(x.id);
    })
    
  }

  getProductDetail(id:string){
    this.customerService.getProductById(id).subscribe(result=>{
      this.product = result;
      this.mainImage=this.product.images[0];
      console.log(this.product);

      this.customerService.getProducts('', this.product.categoryId,'',-1,'',1,4).subscribe(result=>{
        this.similarProducts=result;
      })
    })
  }
  changeImage(url:string){
   this.mainImage=url; 
  }

  get sellingPrice(){
    return Math.round(this.product.price - (this.product.price*this.product.discount)/100)
  }

  wishlistService=inject(WishlistService);
  addToWishList(product:Product) {
    console.log(product);
    if (this.isInWishList(product)) {
      this.wishlistService
      .removeFromWishList(product._id!)
      .subscribe((result) => {
      this.wishlistService.init();
      });
    }else{
      this.wishlistService
      .addInWishList(product._id!)
      .subscribe((result) => {
        this.wishlistService.init();
      })
    }
    
  }

  isInWishList(product: Product){
    let isExits = this.wishlistService.wishlist.find(
      (x) => x._id == product._id
    );
    if (isExits) return true;
    else return false;
  }
}

