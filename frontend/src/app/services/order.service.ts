import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Order } from '../types/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  http=inject(HttpClient);
  constructor() { }

  addOrder(order: Order){
    return this.http.post(environment.apiUrl+"/customer/order",order);
  }
  getCustomerOrders(){
    return this.http.get<Order[]>(environment.apiUrl+"/customer/orders");
  }
  getAdminOrder(){
    return this.http.get<Order[]>(environment.apiUrl+"/orders");
  }
  updateOrderStatus(id: string, status: string) {
    return this.http.put(environment.apiUrl + "/orders/" + id, { status: status });
}

}
