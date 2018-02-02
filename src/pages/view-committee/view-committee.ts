import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewCommitteePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-committee',
  templateUrl: 'view-committee.html',
})
export class ViewCommitteePage {

  committeeName: string;
  members = [
            {name: 'Sreenath S Das', isChairman: true, img: 'sree.jpg'},
            {name: 'Dennis Ritchie', isChairman: false, img: 'dennis.jpg'},
            {name: 'Richard Stallman',isChairman: false, img: 'richard.jpg'}
            ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.committeeName = navParams.get('name');
  }

  removeMember(selectedMember){
    if(!selectedMember.isChairman)
      this.members.splice(this.members.findIndex( el => el.name == selectedMember.name), 1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewCommitteePage');
  }

}
