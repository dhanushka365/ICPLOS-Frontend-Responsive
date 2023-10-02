import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  isDropdownOpen = false;
  toggleDropdown() {
    console.log('toggleDropdown() called');
    this.isDropdownOpen = !this.isDropdownOpen;
}
}