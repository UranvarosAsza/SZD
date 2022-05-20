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
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from  '@angular/material/input';

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
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [
    //{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
