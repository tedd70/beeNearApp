import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: 'store',
    loadChildren: () => import('./luggageStore/luggageStore.module').then(m => m.LuggageStoreModule)
  },
  {
    path: 'pickup',
    loadChildren: () => import('./luggagePickUp/luggagePickUp.module').then(m => m.LuggagePickUpModule)
  },
  { path: '', redirectTo: 'store', pathMatch: 'full' },
  { path: '**', redirectTo: 'store' }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}