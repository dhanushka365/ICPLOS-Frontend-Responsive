import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  User } from '../shared/models/user';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = 'https://localhost:7184/api/';
  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();
  constructor( private http:HttpClient, private router:Router ) { }

  login(values:any){
    return this.http.post<User>(this.baseUrl + 'login', values).pipe(
      map(user => {
          localStorage.setItem('token', user.accessToken);
          console.log(user);
          this.currentUserSource.next(user);
        }     
    ));
  }

  register(values:any){
    return this.http.post<User>(this.baseUrl + 'register', values).pipe(
      map(user => {
          localStorage.setItem('token', user.accessToken);
          console.log(user);
          this.currentUserSource.next(user);
        }     
    ));
  }

  logout(){
    localStorage.removeItem('token');
    this.currentUserSource.next(null);
    this.router.navigateByUrl('/');
  }

  checkEmailExists(email:string){
    return this.http.get<boolean>(this.baseUrl + 'emailexists?email=' + email);
  }
  
}
