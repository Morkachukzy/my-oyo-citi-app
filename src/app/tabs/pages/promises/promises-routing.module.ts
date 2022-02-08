import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromisesPage } from './promises.page';

const routes: Routes = [
  {
    path: '',
    component: PromisesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromisesPageRoutingModule {}
