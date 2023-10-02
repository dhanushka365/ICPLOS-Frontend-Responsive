import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ShopModule } from './shop/shop.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    ShopModule
    
    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
