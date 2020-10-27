import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

// Components
import { LuggageStoreDialogComponent } from '../luggage-store-dialog/luggage-store-dialog.component';

// Service
import { LuggageStoreService } from '../../services/luggageStore.service';

@Component({
  selector: 'app-luggage-store-container',
  templateUrl: './luggage-store-container.component.html',
  styleUrls: ['./luggage-store-container.component.scss']
})
export class LuggageStoreContainerComponent implements OnInit {
  public totalBoxs: number;
  public indexForBox: number;
  public accessCode: string;

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private luggageStoreService: LuggageStoreService,
    private luggageStoreActivatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.luggageStoreActivatedRoute.data.subscribe(data => {
      this.totalBoxs = data.response.maxLuggages;
      this.indexForBox = data.response.currentCount;
    });
  }

  addNewLuggage(result) {
    const luggageResult = {
      userName: result.value.userName,
      numberOfLuggages: parseInt(result.value.numberOfLuggage)
    }
    this.luggageStoreService.saveNewLuggage(luggageResult).subscribe(data => {
      this.accessCode = data.accessCode;


      this.luggageStoreService.getCurrentLuggageCount().subscribe(data => {
        this.indexForBox = data.currentCount;
      });

      this.openModal(luggageResult);
    },
    error => {
      this._snackBar.open(error.error, 'Cancel', { duration: 4000 });
    });
  }

  openModal(item): void {
    const data = {
      result: item,
      accessCode: this.accessCode
    }

    let dialogRef = this.dialog.open(LuggageStoreDialogComponent, {
      height: '200px',
      width: '400px',
      data: data,
      disableClose: true
    });
  }
}
