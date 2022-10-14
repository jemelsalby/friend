import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddfrndComponent } from './addfrnd/addfrnd.component';
import { FormsModule } from '@angular/forms';
import { ViewfrndsComponent } from './viewfrnds/viewfrnds.component';

const routes:Routes=[
  {
    path:"",component:AddfrndComponent
  },
  {
    path:"view",component:ViewfrndsComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddfrndComponent,
    ViewfrndsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
RouterModule.forRoot(routes),
FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
