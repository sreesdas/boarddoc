import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  week1 = 'Feb 1-4';
  week2 = 'Feb 4-10';

  date1 = '1';
  date2 = '10';

  events: Array<{date: string, week: string, agendas: Array<any>}>;

  constructor(public navCtrl: NavController) {
    this.events = [
                    { date: '1/Feb', week: 'Feb 1-3', agendas: [{ heading: 'Agenda 1', time: '10.00', color: '#1E88E5'},
                                               { heading: 'Agenda 2', time: '15:00', color: '#F06292'}]
                    },
                    { date: '10/Feb', week: 'Feb 4-10', agendas: [{ heading: 'Agenda 3', time: '9.00', color: '#BA68C8'}]
                    },
                    { date: '13/Feb', week: 'Feb 11-17', agendas: [{ heading: 'Agenda 5', time: '12.00', color: '#009688'},
                                                { heading: 'Agenda 6', time: '16:30', color: '#EF5350'}]
                    },
                    { date: '18/Feb', week: 'Feb 18-24', agendas: [{ heading: 'Agenda 6', time: '10.30', color: '#1E88E5'},
                                               { heading: 'Agenda 7', time: '14:00', color: '#F06292'}]
                    },
                  ]
  }

}
