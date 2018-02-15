import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendaVolPage } from './agenda-vol';

@NgModule({
  declarations: [
    AgendaVolPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendaVolPage),
  ],
})
export class AgendaVolPageModule {}
