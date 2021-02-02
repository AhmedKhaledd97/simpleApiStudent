import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { RegisterComponent } from './Components/register/register.component';
import { StudentsComponent } from './Components/students/students.component';
import { OptionsComponent } from './Components/options/options.component';
import {RouterModule, Routes} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ContentComponent } from './Components/content/content.component';
import {LoginActivateService} from './services/login-activate.service';
import {RouteActivateService} from './services/route-activate.service';
import {AuothService} from './services/http/auoth.service';




// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
const Routes: Routes = [
  {path : 'con' , component : ContentComponent , canActivate : [LoginActivateService]},
  {path : 'reg' , component : RegisterComponent , canActivate : [LoginActivateService]},
  {path : 'students/options' , component : OptionsComponent , canActivate : [RouteActivateService]},
  {path : 'students/options/:id' , component : OptionsComponent , canActivate : [RouteActivateService]},
  {path : 'students' , component : StudentsComponent , canActivate : [RouteActivateService] },
  {path : 'students/:id' , component : StudentsComponent , canActivate : [RouteActivateService] },
  {path : '' , component : StudentsComponent , canActivate : [RouteActivateService]}
  ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    StudentsComponent,
    OptionsComponent,
    ContentComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    {provide : HTTP_INTERCEPTORS , useClass : AuothService , multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
