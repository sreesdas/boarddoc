import { Component, Input } from '@angular/core';
import { CommitteeProvider } from '../../providers/committee/committee';
import { ActionSheetController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'agenda',
  templateUrl: 'agenda.html'
})
export class AgendaComponent {

  @Input('committee') committeeId: any;

  selectedCommittee: any;
  committees: any;

  constructor(private comPro: CommitteeProvider, private navCtrl: NavController, private actionSheetCtrl: ActionSheetController) {
    this.committees = comPro.getCommitteeList();
    this.selectedCommittee = {id:0, agendas:[], proposer:''};
  }

  openPage() {
    this.navCtrl.push('AgendaPage');
  }

  ngOnChanges(){
    if(this.committeeId > -1){
      this.selectedCommittee = this.committees[this.committeeId];
      console.log(this.selectedCommittee);
    }
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
