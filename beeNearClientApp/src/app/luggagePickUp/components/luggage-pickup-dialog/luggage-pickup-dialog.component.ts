import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-luggage-pickup-dialog',
  templateUrl: './luggage-pickup-dialog.component.html',
  styleUrls: ['./luggage-pickup-dialog.component.scss']
})
export class LuggagePickupDialogComponent implements OnInit {

  public dialogTitle: string = 'Your total invoice:';

  constructor(
    public dialogRef: MatDialogRef<LuggagePickupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
