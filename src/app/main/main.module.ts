import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from '../account/account-routing.module';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [
    MainComponent

  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})

export class MainModule { }
