import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CommitteePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-committee',
  templateUrl: 'committee.html',
})
export class CommitteePage {

//  committees = ['ONGC-Executive Commi Meeting','ONGC-Board Meeting','ONGC-Executive Meeting', 'ONGC-Testing Meeting', 'ONGC-corporate infocom Meeting'];

  committees = [{ name: 'Committee1', hidden: true, description: 'Something'},
  				{ name: 'Committee2', hidden: true, description: 'Something'},
  				{ name: 'Committee3', hidden: true, description: 'Something'},
  				{ name: 'Committee4', hidden: true, description: 'Something'}
  				]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommitteePage');
  }

  buttonClicked(selectedIndex){
  	this.committees[selectedIndex].hidden = !this.committees[selectedIndex].hidden;
  }

}
