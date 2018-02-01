import { Component, Input } from '@angular/core';

/**
 * Generated class for the ComponentsEventComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'components-event',
  templateUrl: 'components-event.html'
})
export class ComponentsEventComponent {

  @Input('event') event: { date: string, week: string, agendas: Array<any> };
  parsedDate: { date: string, day: string };

  constructor() {
    this.parsedDate= { date: '', day: '' };
  }

  ngOnInit() {
    this.parsedDate.date = this.event.date.split('/')[0];
    this.parsedDate.day = this.event.date.split('/')[1];

    //console.log(this.event.date.split('/')[0]);
  }

}
