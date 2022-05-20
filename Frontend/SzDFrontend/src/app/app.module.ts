import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { AddPollComponent } from './components/add-poll/add-poll.component';
import { PollComponent } from './components/poll/poll.component';
import { NewsComponent } from './components/news/news.component';
import {  FormsModule } from '@angular/forms';
import { AddFinancialComponent } from './components/add-financial/add-financial.component';
import { AddResMeetComponent } from './components/add-res-meet/add-res-meet.component';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router'; 
import {MatCardModule} from '@angular/material/card'; 
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddNewsComponent,
    AddPollComponent,
    PollComponent,
    NewsComponent,
    AddFinancialComponent,
    AddResMeetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AuthModule,
    RouterModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
