import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { AuthModule } from '@auth0/auth0-angular';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { AddPollComponent } from './components/add-poll/add-poll.component';
import { PollComponent } from './components/poll/poll.component';
import { NewsComponent } from './components/news/news.component';
import {  FormsModule } from '@angular/forms';
import { AddFinancialComponent } from './components/add-financial/add-financial.component';
import { AddResMeetComponent } from './components/add-res-meet/add-res-meet.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    DashboardComponent,
    AddNewsComponent,
    AddPollComponent,
    PollComponent,
    NewsComponent,
    AddFinancialComponent,
    AddResMeetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev-iskwh67q.eu.auth0.com',
      clientId: 'RHx2YCFPjn0R7AloQWfAh0hJFoyrgiss',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
