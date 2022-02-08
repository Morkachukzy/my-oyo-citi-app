import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PollPageRoutingModule } from './poll-routing.module';

import { PollPage } from './poll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PollPageRoutingModule
  ],
  declarations: [PollPage]
})
export class PollPageModule {}
