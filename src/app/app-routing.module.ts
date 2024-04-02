import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { DetailComponentComponent } from './shared-components/detail-component/detail-component.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutPageComponent},
  {path:'services',component:ServicesComponent},
  {path:'login',component:SignInComponent},
  {path:'detail',component:DetailComponentComponent},
  {path:'signUp',component:SignUpComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
