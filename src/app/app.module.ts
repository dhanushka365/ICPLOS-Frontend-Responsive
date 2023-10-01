import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SideMenuComponent } from './core/side-menu/side-menu.component';
import { MainComponent } from './main/main.component';
import { BooksComponent } from './books/books.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
