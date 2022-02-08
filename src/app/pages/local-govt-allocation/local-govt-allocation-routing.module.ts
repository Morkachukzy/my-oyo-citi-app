import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalGovtAllocationPage } from './local-govt-allocation.page';

const routes: Routes = [
  {
    path: '',
    component: LocalGovtAllocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalGovtAllocationPageRoutingModule {}
