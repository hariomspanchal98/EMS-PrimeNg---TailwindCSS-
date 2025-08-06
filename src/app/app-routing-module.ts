import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './common/home/home';

const routes: Routes = [
  {path: '', loadChildren: ()=>import('./auth/auth-module').then(m=>m.AuthModule)},
  {path: 'home', component: Home},
  {path: 'user', loadChildren: ()=>import('./user/user-module').then(m=>m.UserModule)},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
