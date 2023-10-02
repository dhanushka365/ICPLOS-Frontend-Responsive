import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = 'https://localhost:7184/api/';
  constructor( private http:HttpClient) { }

  getProducts(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl + 'Products');
  }
}
