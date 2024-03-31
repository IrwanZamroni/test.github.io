import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginmenuComponent} from '../app/loginmenu/loginmenu.component'
import {EmployeelistComponent} from '../app/employeelist/employeelist.component'
import {EmloyeeaddComponent} from '../app/emloyeeadd/emloyeeadd.component'
import {DetailemployeeComponent} from '../app/detailemployee/detailemployee.component'
import {authguardGuard} from '../service/authguard.guard'
import {loginGuard} from '../service/login.guard'
const routes: Routes = [
  { path: '',redirectTo: 'authentication/login', pathMatch: 'full' },
  { path: 'authentication/login', component: LoginmenuComponent, canActivate: [loginGuard]  },
   { path: 'home', component: EmployeelistComponent , canActivate: [authguardGuard] },
   { path: 'add-employee', component: EmloyeeaddComponent , canActivate: [authguardGuard] },
   { path: 'detail-employee/:id', component: DetailemployeeComponent , canActivate: [authguardGuard] },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
