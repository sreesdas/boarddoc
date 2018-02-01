import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { AgendaPage } from '../pages/agenda/agenda';
import { CommitteePage } from '../pages/committee/committee';
import { UsersPage } from '../pages/users/users';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ComponentsEventComponent } from '../components/components-event/components-event';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AgendaPage,
    CommitteePage,
    UsersPage,
    ContactPage,
    LoginPage,
    HomePage,
    TabsPage,
    ComponentsEventComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AgendaPage,
    CommitteePage,
    LoginPage,
    UsersPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
