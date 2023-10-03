import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { AccountComponent } from './account/account.component';
import { AuthGuard } from './core/guards/auth.guard';



const routes: Routes = [
 // {path:'',redirectTo: '/main' , pathMatch:'full'},
  {path:'main', component:MainComponent},
  //{path:'shop', loadChildren:()=>import('./shop/shop.module').then(mod=>mod.ShopModule)},
  {path:'shop', component:ShopComponent ,canActivate:[AuthGuard]},//Auth guard added
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'account', component:AccountComponent},
  {path:'**',redirectTo: '/login' , pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
