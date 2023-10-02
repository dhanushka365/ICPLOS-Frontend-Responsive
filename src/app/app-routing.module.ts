import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
 // {path:'',redirectTo: '/main' , pathMatch:'full'},
  { path: 'login', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  //{path:'main', component:MainComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
