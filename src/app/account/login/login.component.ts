import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
errorMessage: string = ''; // Variable to store the error message
showError: boolean = false; // Boolean to control error message visibility
loginForm = new FormGroup({ 
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', Validators.required)
});

constructor(private accountService: AccountService,private router:Router) { }

onSubmit() {
  this.accountService.login(this.loginForm.value).subscribe(
    {
      next: (response) => {
        this.showError = false;
        console.log(response);
        this.router.navigateByUrl('/shop')
      },
      error: (error) => {
        this.showError = true;
        this.errorMessage = 'Invalid username or password. Please check your credentials.';
        console.error('Login error:', error);
      }
    }
  );
 }

}
