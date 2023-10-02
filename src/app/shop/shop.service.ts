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

    const accessToken = localStorage.getItem('token');//Retrieve the access token from local storage

    console.log(accessToken);

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`// Create headers with the Authorization token
    });

    const options = { headers: headers };// Include headers in the HTTP request
    
    return this.http.get<Product[]>(this.baseUrl + 'Products/admin/all', options);
  }
}
