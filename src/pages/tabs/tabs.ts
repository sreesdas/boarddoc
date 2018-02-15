import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { AgendaHomePage } from '../agenda-home/agenda-home';
import { CommitteePage } from '../committee/committee';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CommitteePage;
  tab2Root = { title: 'Dashboard', component: HomePage };
  tab3Root = AgendaHomePage;

  constructor(private navParams: NavParams) {
    if(navParams.get('page'))
      this.tab2Root = this.navParams.get('page');
  }
}
