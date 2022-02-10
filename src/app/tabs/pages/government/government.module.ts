import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GovernmentPageRoutingModule } from './government-routing.module';

import { GovernmentPage } from './government.page';
import {MaterialsModule} from '../../../shared/materials/materials.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GovernmentPageRoutingModule,
    MaterialsModule,
  ],
  declarations: [GovernmentPage]
})
export class GovernmentPageModule {}