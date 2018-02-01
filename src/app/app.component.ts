import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UsersPage } from '../pages/users/users';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = TabsPage;
  pages: Array<{title: string, component: any, icon: string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.pages = [
      { title: 'DashBoard', component: HomePage, icon: 'home' },
      { title: 'Committee', component: TabsPage, icon: 'briefcase' },
      { title: 'Agenda', component: TabsPage, icon: 'calendar'},
      { title: 'MOM', component: UsersPage, icon: 'create'},
      { title: 'Circular', component: UsersPage, icon: 'document'},
      { title: 'Notice', component: UsersPage, icon: 'paper'},
      { title: 'Users', component: UsersPage, icon: 'people'},
      { title: 'Logout', component: UsersPage, icon: 'power'}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(nav){
    nav.title == "Login" ? this.nav.setRoot(LoginPage, {page: nav}) : this.nav.setRoot(TabsPage, {page: nav});
  }
}
