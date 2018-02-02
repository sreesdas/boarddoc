import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommitteeProvider } from '../../providers/committee/committee';

@IonicPage()
@Component({
  selector: 'page-add-agenda',
  templateUrl: 'add-agenda.html',
})
export class AddAgendaPage {

  committees: any;
  selectedCommittee: string;
  selected = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private comPro: CommitteeProvider) {
    this.selectedCommittee = navParams.get('committee');
    this.selected = this.selectedCommittee['id'];
    this.committees = comPro.getCommitteeList();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAgendaPage');
  }

}
