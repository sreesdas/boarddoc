import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

//import { NoticePage } from '../pages/notice/notice';
//import { MomPage } from '../pages/mom/mom';
//import { CircularPage } from '../pages/circular/circular';

import { AgendaHomePage } from '../pages/agenda-home/agenda-home';
import { AgendaComponent } from '../components/agenda/agenda';
import { AgendaVolComponent } from '../components/agenda-vol/agenda-vol';
import { CommitteePage } from '../pages/committee/committee';
//import { UsersPage } from '../pages/users/users';
import { LoginPage } from '../pages/login/login';
//import { ViewCommitteePage } from '../pages/view-committee/view-committee';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsEventComponent } from '../components/components-event/components-event';
import { CommitteeProvider } from '../providers/committee/committee';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AgendaHomePage,
    AgendaComponent,
    AgendaVolComponent,
    //AddAgendaPage,
    //AgendaPage,
    CommitteePage,
    //UsersPage,
    ContactPage,
    //NoticePage,
    //MomPage,
    //CircularPage,
    LoginPage,
    HomePage,
    TabsPage,
    //ViewCommitteePage,
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
    AgendaHomePage,
    //AddAgendaPage,
    //AgendaPage,
    CommitteePage,
    LoginPage,
    //UsersPage,
    ContactPage,
    //NoticePage,
    //MomPage,
    //CircularPage,
    HomePage,
    TabsPage,
    //ViewCommitteePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommitteeProvider
  ]
})
export class AppModule {}
