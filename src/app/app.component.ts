import { Component, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.loadCurrentUser();
  }
  title = 'angular-responsive-test-app';

  constructor(private accountService: AccountService){}

  loadCurrentUser(){
    const token = localStorage.getItem('token');
    if (token) this.accountService.loadCurrentUser(token).subscribe();

  }
}
