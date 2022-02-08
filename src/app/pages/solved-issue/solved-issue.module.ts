import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolvedIssuePageRoutingModule } from './solved-issue-routing.module';

import { SolvedIssuePage } from './solved-issue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolvedIssuePageRoutingModule
  ],
  declarations: [SolvedIssuePage]
})
export class SolvedIssuePageModule {}
