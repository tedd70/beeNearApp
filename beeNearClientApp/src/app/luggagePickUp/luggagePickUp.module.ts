import { NgModule } from "@angular/core";

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Modules
import { SharedModule } from '../shared/shared.module';
import { LuggagePickUpRoutingModule } from './luggagePickUp-rounting.module';

// Components
import { LuggagePickupContainerComponent } from './components/luggage-pickup-container/luggage-pickup-container.component';
import { LuggagePickupFormComponent } from './components/luggage-pickup-form/luggage-pickup-form.component';
import { LuggagePickupDialogComponent } from './components/luggage-pickup-dialog/luggage-pickup-dialog.component';

@NgModule({
  declarations: [LuggagePickupContainerComponent, LuggagePickupFormComponent, LuggagePickupDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    LuggagePickUpRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports: [LuggagePickupContainerComponent, LuggagePickupDialogComponent]
})

export class LuggagePickUpModule {}