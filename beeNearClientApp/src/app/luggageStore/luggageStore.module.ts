import { NgModule } from "@angular/core";

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Modules
import { SharedModule } from '../shared/shared.module';
import { LuggageStoreRoutingModule } from './luggageStore-rounting.module';

// Components
import { LuggageStoreContainerComponent } from './components/luggage-store-container/luggage-store-container.component';
import { LuggageStoreFormComponent } from './components/luggage-store-form/luggage-store-form.component';
import { LuggageStoreDialogComponent } from './components/luggage-store-dialog/luggage-store-dialog.component';

@NgModule({
  declarations: [LuggageStoreContainerComponent, LuggageStoreFormComponent, LuggageStoreDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    LuggageStoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports: [LuggageStoreContainerComponent, LuggageStoreDialogComponent]
})

export class LuggageStoreModule {}