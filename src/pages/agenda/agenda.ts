import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
//import { AddAgendaPage } from '../add-agenda/add-agenda';
import { CommitteeProvider } from '../../providers/committee/committee';

@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {
  selectOptions = {
    title: 'Select Committee'
  };
  committee = -1;
  selectedCommittee: any;
  committees: Array<{id: number, name: string, agendas: Array<{id: number, name: string, proposer: string}>}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private comPro: CommitteeProvider, private actionSheetCtrl: ActionSheetController) {
    this.selectedCommittee = {id: 0, name: '', agendas: [], proposer: ''};
    this.committees = comPro.getCommitteeList();
  }

  selectionChanged(){

    if(this.committee > -1)
      this.selectedCommittee = this.committees[this.committee];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }

  addAgenda(){
    this.navCtrl.push('AddAgendaPage', { committee : this.selectedCommittee } );
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
