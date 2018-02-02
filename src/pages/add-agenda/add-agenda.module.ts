import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAgendaPage } from './add-agenda';

@NgModule({
  declarations: [
    AddAgendaPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAgendaPage),
  ],
})
export class AddAgendaPageModule {}
