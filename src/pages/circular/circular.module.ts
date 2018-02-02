import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CircularPage } from './circular';

@NgModule({
  declarations: [
    CircularPage,
  ],
  imports: [
    IonicPageModule.forChild(CircularPage),
  ],
})
export class CircularPageModule {}
