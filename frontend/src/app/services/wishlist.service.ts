import { HttpBackend, HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../types/product';
import { environment } from '../../environments/environment';
import { Category } from '../types/category';
import { Brand } from '../types/brand';


@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  http = inject(HttpClient);
  constructor() { }

  wishlist:Product[]=[];

  init(){
    return this.getWishList().subscribe(result=>{
      this.wishlist=result;
    });
  }

  getWishList(){
    return this.http.get<Product[]>(environment.apiUrl+"/customer/wishlists");
  }
  addInWishList(productId:string){
    return this.http.post(environment.apiUrl+"/customer/wishlists/"+productId,{});
  }
  removeFromWishList(productId:string){
    return this.http.delete(environment.apiUrl+"/customer/wishlists/"+productId)
  }

}