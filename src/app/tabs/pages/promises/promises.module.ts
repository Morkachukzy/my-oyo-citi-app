import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromisesPageRoutingModule } from './promises-routing.module';

import { PromisesPage } from './promises.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromisesPageRoutingModule
  ],
  declarations: [PromisesPage]
})
export class PromisesPageModule {}
