import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolvedIssuePage } from './solved-issue.page';

const routes: Routes = [
  {
    path: '',
    component: SolvedIssuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolvedIssuePageRoutingModule {}
