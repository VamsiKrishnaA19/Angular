import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { RestoListComponent } from './resto-list/resto-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { EditRestoComponent } from './edit-resto/edit-resto.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { UserTypeService } from './user-type.service';
import { DeleteRestoComponent } from './delete-resto/delete-resto.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomerCommentsComponent } from './customer-comments/customer-comments.component';
import { GuestHomeComponent } from './guest-home/guest-home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { SundayLunchMenuComponent } from './sunday-lunch-menu/sunday-lunch-menu.component';
import { LunchEarlyEveningMenuComponent } from './lunch-early-evening-menu/lunch-early-evening-menu.component';
import { SpecialEventsComponent } from './special-events/special-events.component';

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch:'full'},
  {path:'partnerlist', component:RestoListComponent},
  {path:'add', component:AddRestoComponent, canActivate: [UserTypeService]},
  {path:'edit/:id', component:EditRestoComponent, canActivate: [UserTypeService]},
  {path:'delete/:id', component:DeleteRestoComponent, canActivate: [UserTypeService]},
  {path:'register', component:RegisterComponent, canActivate: [UserTypeService]},
  {path:'login/:role', component:LoginComponent},
  {path:'logout', component:LogoutComponent},
  {path:'guest', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:GuestHomeComponent},
  {path:'comments', component:CustomerCommentsComponent},
  {path:'about', component:AboutUsComponent},
  {path:'contact', component:ContactUsComponent},
  {path:'menus/wine-list', component:WineListComponent},
  {path:'menus/main-menu', component:MainmenuComponent},
  {path:'menus/sunday-lunch-menu', component:SundayLunchMenuComponent},
  {path:'menus/lunch-early-evening-menu', component:LunchEarlyEveningMenuComponent},
  {path:'special-events', component:SpecialEventsComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
