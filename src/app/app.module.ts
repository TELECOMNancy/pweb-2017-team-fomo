import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import {MdListModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import { MdSidenavModule } from '@angular/material';

import {Router} from '@angular/router';

import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists.component';
import { AppRoutingModule } from './app-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';




export const firebaseConfig = {
  apiKey: 'AIzaSyAPMbmzPT5l8CvM0HgSeb6NAB1_J5jW0I8',
  authDomain: 'furrywafflelist.firebaseapp.com',
  databaseURL: 'https://furrywafflelist.firebaseio.com',
  storageBucket: 'bucket.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    MdListModule,
    MdCardModule,
    MdButtonModule,
    MdSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
