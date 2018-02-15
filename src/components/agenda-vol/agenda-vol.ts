import { Input, Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'agenda-vol',
  templateUrl: 'agenda-vol.html'
})
export class AgendaVolComponent {

  text: string;
  @Input('committee') committeeId : any;

  constructor(private navCtrl: NavController) {
    console.log('Hello AgendaVolComponent Component');
    this.text = 'Hello World';
  }

  ngOnChanges(){
    console.log(this.committeeId);
  }

  openPage() {
    this.navCtrl.push('AgendaVolPage');
  }

}
