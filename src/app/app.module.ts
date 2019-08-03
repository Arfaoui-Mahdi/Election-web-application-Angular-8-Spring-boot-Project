import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent  } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { DataPageComponent } from './data-page/data-page.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
        
    ],
    declarations: [
        AppComponent ,
        LoginComponent,
        RegisterComponent,
        WelcomeComponent,
        HeaderComponent,
        FooterComponent,
        LogoutComponent,
        DataPageComponent
    ],
    bootstrap: [AppComponent ]
})
export class AppModule { }