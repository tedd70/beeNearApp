import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

// Components
import { LuggagePickUpService } from '../../services/luggagePickUp.service';
import { LuggagePickupDialogComponent } from '../luggage-pickup-dialog/luggage-pickup-dialog.component';

@Component({
  selector: 'app-luggage-pickup-container',
  templateUrl: './luggage-pickup-container.component.html',
  styleUrls: ['./luggage-pickup-container.component.scss']
})
export class LuggagePickupContainerComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private pickUpService: LuggagePickUpService
    ) { }

  ngOnInit(): void {}

  openModal(item): void {
    let dialogRef = this.dialog.open(LuggagePickupDialogComponent, {
      height: '200px',
      width: '400px',
      data: item,
      disableClose: true
    });
  }

  getAccessCode(result) {
    this.pickUpService.getLuggage(result.value.accessCode).subscribe(data => {
      this.openModal(data.ammountToPay);
    },
    error => {
      this._snackBar.open(error.error, 'Cancel', { duration: 4000 });
    });
  }

}
