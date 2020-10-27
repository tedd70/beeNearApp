import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { LuggagePickupContainerComponent } from './components/luggage-pickup-container/luggage-pickup-container.component';

const routes: Routes = [
  {
    path: '',
    component: LuggagePickupContainerComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LuggagePickUpRoutingModule {}