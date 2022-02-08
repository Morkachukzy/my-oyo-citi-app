import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ParticipationPollComponent} from './participation-poll.component';


@NgModule({
  declarations: [ParticipationPollComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    ParticipationPollComponent
  ]
})
export class ParticipationPollModule {
}
