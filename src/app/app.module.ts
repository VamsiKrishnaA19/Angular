import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { RestoListComponent } from './resto-list/resto-list.component';
import { RestoService } from './resto-service.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { EditRestoComponent } from './edit-resto/edit-resto.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';
import { DeleteRestoComponent } from './delete-resto/delete-resto.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomerCommentsComponent } from './customer-comments/customer-comments.component';
import { GuestHomeComponent } from './guest-home/guest-home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { LunchEarlyEveningMenuComponent } from './lunch-early-evening-menu/lunch-early-evening-menu.component';
import { SundayLunchMenuComponent } from './sunday-lunch-menu/sunday-lunch-menu.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { SpecialEventsComponent } from './special-events/special-events.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRestoComponent,
    RestoListComponent,
    PageNotFoundComponent,
    RegisterComponent,
    EditRestoComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    LogoutComponent,
    DeleteRestoComponent,
    ContactUsComponent,
    CustomerCommentsComponent,
    GuestHomeComponent,
    AboutUsComponent,
    MainmenuComponent,
    LunchEarlyEveningMenuComponent,
    SundayLunchMenuComponent,
    WineListComponent,
    SpecialEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: true
    })
  ],
  providers: [ RestoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
