import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FederalAllocationPageRoutingModule } from './federal-allocation-routing.module';

import { FederalAllocationPage } from './federal-allocation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FederalAllocationPageRoutingModule
  ],
  declarations: [FederalAllocationPage]
})
export class FederalAllocationPageModule {}
