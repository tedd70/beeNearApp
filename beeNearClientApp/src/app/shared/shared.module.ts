import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

// import { MatIconModule } from '@angular/material/icon';
// import { MatButtonModule } from '@angular/material/button';
// import { MatDialogModule } from '@angular/material/dialog';

// Components
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    // MatIconModule,
    // MatButtonModule,
    // MatDialogModule
  ],
  exports: [
    HeaderComponent,
    NavComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}