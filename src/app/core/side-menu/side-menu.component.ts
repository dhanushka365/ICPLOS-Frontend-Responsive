import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { SideMenuService } from '../../side-menu.service';
import { MenuItem, MenuItems } from '../../menu-item.model';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit{
  isOpen: boolean =false;
  menuItems: MenuItem[] = MenuItems;
  isSmallScreen: boolean = false;
  
  constructor(
    private sideMenuService: SideMenuService
    ){}

  ngOnInit(): void {
      this.sideMenuService.isOpen.subscribe((isOpen) =>(this.isOpen =isOpen));
      this.checkScreenSize();
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }


  private checkScreenSize() {
    this.isSmallScreen = window.innerWidth <= 720; // Adjust this width according to your small screen size breakpoint
    if (!this.isSmallScreen && this.isOpen) {
      // Close the menu on larger screens
      this.sideMenuService.close();
    }
  }

  close(){
    this.sideMenuService.close();
  }
}
