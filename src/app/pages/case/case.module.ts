import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasePageRoutingModule } from './case-routing.module';

import { CasePage } from './case.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasePageRoutingModule
  ],
  declarations: [CasePage]
})
export class CasePageModule {}
