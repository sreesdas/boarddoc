import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CommitteeProvider } from '../../providers/committee/committee';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-agenda-home',
  templateUrl: 'agenda-home.html',
})
export class AgendaHomePage {

  tab1Root = 'AgendaPage';
  tab2Root = 'AgendaVolPage';
  selected:any;
  committeeId= -1;
  committees: any;
  selectedCommittee: any;

  constructor(private navCtrl: NavController, private comPro: CommitteeProvider, private actionSheetCtrl: ActionSheetController) {
    this.selected = 'agenda';
    this.committees = comPro.getCommitteeList();
    this.selectedCommittee = {id: 0, name: '', agendas: [], proposer: ''};
  }


  selectionChanged(){
    if(this.committeeId > -1)
      this.selectedCommittee = this.committees[this.committeeId];

    console.log(this.selectedCommittee, this.committeeId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaHomePage');
    console.log(this.selected);
  }

  onSegmentChanged(ev) {
    console.log(this.selected);
  }

  addAgenda(){
    this.navCtrl.push('AddAgendaPage', { committee : this.selectedCommittee } );
  }

}
