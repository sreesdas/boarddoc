import { Injectable } from '@angular/core';

@Injectable()
export class CommitteeProvider {

  committees = [
      { id: 0,
        name: 'ONGC-Audit & Ethics Committee Meeting',
        owner: '90227',
        agendas: [
          { agenda_id: 0, name: '159 A&EC Agenda', proposer: ''},
          { agenda_id: 1, name: 'MOM of 158th meeting', proposer: ''}
        ],
        agenda_vols: [
          { start_time: '10/2/2018 15:00', venue: 'Scope Minar', creator: '71548'},
          { start_time: '10/2/2018 19:00', venue: 'Vasant Kunj', creator: '63948'},
          { start_time: '12/2/2018 10:00', venue: 'Delhi', creator: '128238'},
        ]
      },
      { id: 1,
        name: 'ONGC-Board Meeting',
        owner: '90227',
        agendas: [
          { agenda_id: 2, name: 'Appointment of Company Secretary', proposer: ''},
          { agenda_id: 3, name: 'Apprisal of status of 3 ongoing projects', proposer: ''}
        ],
        agenda_vols: [
          { start_time: '14/2/2018 15:00', venue: 'Scope Minar', creator: '71548'},
          { start_time: '16/2/2018 19:00', venue: 'Vasant Kunj', creator: '63948'},
          { start_time: '16/2/2018 10:00', venue: 'Delhi', creator: '128238'},
        ]
      },
      { id: 2,
        name: 'ONGC-Executive Testing',
        owner: '128238',
        agendas: [
          { agenda_id: 4, name: 'Testing', proposer: ''},
          { agenda_id: 5, name: 'ongctest', proposer: ''}
        ],
        agenda_vols: [
          { start_time: '18/2/2018 10:30', venue: 'Scope Minar', creator: '71548'},
          { start_time: '18/2/2018 12:00', venue: 'Vasant Kunj', creator: '63948'},
          { start_time: '18/2/2018 15:00', venue: 'Delhi', creator: '128238'},
        ]
      }
  ];

  constructor() {
  }

  getCommitteeList() {
    return this.committees;
  }

}
