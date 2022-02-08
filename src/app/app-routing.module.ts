import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'federal-allocation',
    loadChildren: () => import('./pages/federal-allocation/federal-allocation.module').then(m => m.FederalAllocationPageModule)
  },
  {
    path: 'local-government-allocation',
    loadChildren: () => import('./pages/local-govt-allocation/local-govt-allocation.module').then(m => m.LocalGovtAllocationPageModule)
  },
  {
    path: 'poll',
    loadChildren: () => import('./pages/poll/poll.module').then( m => m.PollPageModule)
  },
  {
    path: 'solved-issue',
    loadChildren: () => import('./pages/solved-issue/solved-issue.module').then( m => m.SolvedIssuePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}