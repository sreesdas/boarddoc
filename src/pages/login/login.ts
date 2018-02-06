import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username='';
  password='';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  buttonClicked() {
    this.navCtrl.setRoot(TabsPage);
  }

  login(){
    if(this.username == 'admin' && this.password== 'admin'){
      this.navCtrl.setRoot(TabsPage);
    }
    else {
      alert('Wrong Credentials');
    }
  }
}
