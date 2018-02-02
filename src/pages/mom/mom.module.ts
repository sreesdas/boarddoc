import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MomPage } from './mom';

@NgModule({
  declarations: [
    MomPage,
  ],
  imports: [
    IonicPageModule.forChild(MomPage),
  ],
})
export class MomPageModule {}
