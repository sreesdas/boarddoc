import { Injectable } from '@angular/core';

@Injectable()
export class CommitteeProvider {

  committees = [
      { id: 0,
        name: 'ONGC-Audit & Ethics Committee Meeting',
        agendas: [
          {id: 0, name: '159 A&EC Agenda', proposer: ''},
          {id: 1, name: 'MOM of 158th meeting', proposer: ''}
        ]
      },
      { id: 1,
        name: 'ONGC-Board Meeting',
        agendas: [
          {id: 2, name: 'Appointment of Company Secretary', proposer: ''},
          {id: 3, name: 'Apprisal of status of 3 ongoing projects', proposer: ''}
        ]
      },
      { id: 2,
        name: 'ONGC-Executive Testing',
        agendas: [
          {id: 4, name: 'Testing', proposer: ''},
          {id: 5, name: 'ongctest', proposer: ''}
        ]
      }
  ];

  constructor() {
    console.log('Hello CommitteeProvider Provider');
  }

  getCommitteeList() {
    return this.committees;
  }

}
