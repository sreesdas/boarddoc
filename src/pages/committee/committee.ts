import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { CommitteeProvider } from '../../providers/committee/committee';


@Component({
  selector: 'page-committee',
  templateUrl: 'committee.html',
})
export class CommitteePage {

  committees : any;

  constructor(public navCtrl: NavController, private actionSheetCtrl: ActionSheetController, private comPro : CommitteeProvider) {
    this.committees = comPro.getCommitteeList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommitteePage');
  }

  buttonClicked(selectedIndex){
  	this.committees[selectedIndex].hidden = !this.committees[selectedIndex].hidden;
  }

  goToCommittee(selectedName){
    this.navCtrl.push('ViewCommitteePage', {name: selectedName} )
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
