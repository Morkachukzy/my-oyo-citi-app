import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GovernmentPage } from './government.page';

const routes: Routes = [
  {
    path: '',
    component: GovernmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GovernmentPageRoutingModule {}
