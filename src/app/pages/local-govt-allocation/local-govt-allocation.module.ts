import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalGovtAllocationPageRoutingModule } from './local-govt-allocation-routing.module';

import { LocalGovtAllocationPage } from './local-govt-allocation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalGovtAllocationPageRoutingModule
  ],
  declarations: [LocalGovtAllocationPage]
})
export class LocalGovtAllocationPageModule {}
