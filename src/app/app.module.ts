import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ShopModule } from './shop/shop.module';
import { AccountModule } from './account/account.module';
import { RouterModule } from '@angular/router';
import { AnimationBuilder } from '@angular/animations';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    ShopModule,
    AccountModule, // Include the AccountModule
    RouterModule.forRoot([]) // Add RouterModule.forRoot for the root application routes

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
