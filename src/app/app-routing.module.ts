import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { DataPageComponent } from './data-page/data-page.component';


const routes: Routes = [
{path:'',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'registerme/:name',component:RegisterComponent},
{path:'login', component:LoginComponent},
{path:'welcome', component:WelcomeComponent, canActivate: [RouteGuardService]},
{path:'logout', component:LogoutComponent, canActivate: [RouteGuardService]},
{path:'authpage', component:DataPageComponent},
{path:'**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
