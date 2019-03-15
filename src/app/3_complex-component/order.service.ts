import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {}

  placeOrder(numberOfTickets: number): Observable<any> {
    return this.http.post<any>('/order/', {
      userId: '123123',
      items: numberOfTickets
    });
  }
}
