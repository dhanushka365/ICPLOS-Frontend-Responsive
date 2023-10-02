import { Component, OnInit } from '@angular/core';
import { SideMenuService } from '../../side-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  isOpen: boolean =false;
  isSmallScreen: boolean = false;
  
  constructor(private sideMenuService: SideMenuService){}

  ngOnInit(): void {
      this.sideMenuService.isOpen.subscribe((isOpen) =>(this.isOpen =isOpen));
      this.checkScreenSize();
  }
  private checkScreenSize() {
    this.isSmallScreen = window.innerWidth <= 720; // Adjust this width according to your small screen size breakpoint
    if (!this.isSmallScreen) {
      // Close the menu on larger screens
      this.sideMenuService.close();
    }
  }

  close(){
    this.sideMenuService.close();
  }
  
  toggle(){
    if (this.isOpen) {
      this.sideMenuService.close();
    }else{
      this.sideMenuService.open();
    }
  }

}
