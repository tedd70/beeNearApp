import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { LuggageStoreContainerComponent } from './components/luggage-store-container/luggage-store-container.component';

// Resolver
import { LuggageStoreResolver } from './services/luggageStore-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: LuggageStoreContainerComponent,
    resolve: {
      response: LuggageStoreResolver
    }
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LuggageStoreRoutingModule {}