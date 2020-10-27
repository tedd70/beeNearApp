import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-luggage-store-dialog',
  templateUrl: './luggage-store-dialog.component.html',
  styleUrls: ['./luggage-store-dialog.component.scss']
})
export class LuggageStoreDialogComponent implements OnInit {

  public dialogTitle: string = 'Your acccess code';
  public code: string;

  constructor(
    public dialogRef: MatDialogRef<LuggageStoreDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.code = this.data.accessCode;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
