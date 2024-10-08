import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../shared/models/products';
@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:7184/api/';
  constructor( private http:HttpClient) { }

  getProducts(): Observable<Product[]>{

    const accessToken = localStorage.getItem('token');

    console.log(accessToken);

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`
    });

    const options = { headers: headers };
    
    return this.http.get<Product[]>(this.baseUrl + 'Products/admin/all', options);
  }
}
