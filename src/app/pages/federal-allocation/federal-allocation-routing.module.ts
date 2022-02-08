import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FederalAllocationPage } from './federal-allocation.page';

const routes: Routes = [
  {
    path: '',
    component: FederalAllocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FederalAllocationPageRoutingModule {}
