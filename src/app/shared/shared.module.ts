import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot()
   
  ]
})
export class SharedModule {
  ReactiveFormsModule: any;
 BsDropdownModule :any;

 }
