import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  User,Root } from '../shared/models/user';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  

  baseUrl = 'https://localhost:7184/api/Auth/';
  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();
  constructor( private http:HttpClient, private router:Router ) { }

  loadCurrentUser(token: string){
     let headers = new HttpHeaders();
     headers = headers.set('Authorization',`Bearer ${token}`);
     return this.http.get<Root>(this.baseUrl+'',{headers}).pipe(
      map((response: Root) => {
        localStorage.setItem('token', response.accessToken);
        this.currentUserSource.next(response.user);
      })
     )
  }

  login(values: any): Observable<void> {
    return this.http.post<Root>(this.baseUrl + 'login', values).pipe(
      map((response: Root) => {
        localStorage.setItem('token', response.accessToken);
        this.currentUserSource.next(response.user);
      })
    );
  }


  register(values: any): Observable<void> {
    return this.http.post<Root>(this.baseUrl + 'register', values).pipe(
      map((response: Root) => {
        localStorage.setItem('token', response.accessToken);
        this.currentUserSource.next(response.user);
      })
    );
  }

  logout(): void {

    localStorage.removeItem('token');
    this.currentUserSource.next(null);
  }


  checkEmailExists(email: string): Observable<boolean> {
    return this.http.get<boolean>(this.baseUrl + 'emailexists?email=' + email);
  }

}
