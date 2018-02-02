import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

import { ViewCommitteePage } from '../view-committee/view-committee';

@IonicPage()
@Component({
  selector: 'page-committee',
  templateUrl: 'committee.html',
})
export class CommitteePage {

//  committees = ['ONGC-Executive Commi Meeting','ONGC-Board Meeting','ONGC-Executive Meeting', 'ONGC-Testing Meeting', 'ONGC-corporate infocom Meeting'];

  committees = [{ name: 'ONGC-Audit & Ethics Committee Meeting', hidden: true, description: '90227'},
  				{ name: 'ONGC-Board Meeting', hidden: true, description: '90227'},
          { name: 'ONGC-Stakeholders Relationship Committee Meeting', hidden: true, description: '90227'},
  				{ name: 'ONGC-Executive Meeting', hidden: true, description: '124990'},
  				{ name: 'ONGC-Testing Meeting', hidden: true, description: '63948'}
  				]

  constructor(public navCtrl: NavController, private actionSheetCtrl: ActionSheetController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommitteePage');
  }

  buttonClicked(selectedIndex){
  	this.committees[selectedIndex].hidden = !this.committees[selectedIndex].hidden;
  }

  goToCommittee(selectedName){
    this.navCtrl.push(ViewCommitteePage, {name: selectedName} )
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Choose your action',
      buttons: [
        {
          text: 'Edit Details',
          role: 'destructive',
          icon: 'create',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Remove',
          icon: 'trash',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
