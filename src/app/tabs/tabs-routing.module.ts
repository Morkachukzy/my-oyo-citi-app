import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      // {
      //   path: 'Home',
      //   loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      // },
      // {
      //   path: 'People',
      //   loadChildren: () => import('../pages/people/people.module').then(m => m.PeoplePageModule)
      // },
      // {
      //   path: 'Government',
      //   loadChildren: () => import('../pages/government/government.module').then(m => m.GovernmentPageModule)
      // },
      // {
      //   path: 'Promises',
      //   loadChildren: () => import('../pages/promises/promises.module').then(m => m.PromisesPageModule)
      // },
      // {
      //   path: 'More',
      //   loadChildren: () => import('../pages/more/more.module').then(m => m.MorePageModule)
      // },
      {
        path: 'Home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'People',
        loadChildren: () => import('./pages/people/people.module').then(m => m.PeoplePageModule)
      },
      {
        path: 'Government',
        loadChildren: () => import('./pages/government/government.module').then(m => m.GovernmentPageModule)
      },
      {
        path: 'Promises',
        loadChildren: () => import('./pages/promises/promises.module').then(m => m.PromisesPageModule)
      },
      {
        path: 'More',
        loadChildren: () => import('./pages/more/more.module').then(m => m.MorePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/Home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/Home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'people',
    loadChildren: () => import('./pages/people/people.module').then(m => m.PeoplePageModule)
  },
  {
    path: 'government',
    loadChildren: () => import('./pages/government/government.module').then(m => m.GovernmentPageModule)
  },
  {
    path: 'promises',
    loadChildren: () => import('./pages/promises/promises.module').then(m => m.PromisesPageModule)
  },
  {
    path: 'more',
    loadChildren: () => import('./pages/more/more.module').then(m => m.MorePageModule)
  },

  // {
  //   path: 'federal-allocation',
  //   loadChildren: () => import('../pages/federal-allocation/federal-allocation.module').then(m => m.FederalAllocationPageModule)
  // },
  // {
  //   path: 'local-government-allocation',
  //   loadChildren: () => import('../pages/local-govt-allocation/local-govt-allocation.module').then(m => m.LocalGovtAllocationPageModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {
}
