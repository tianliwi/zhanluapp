import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddPortfolioDialogComponent } from '../add-portfolio-dialog/add-portfolio-dialog.component';

@Component({
  selector: 'app-add-portfolio',
  templateUrl: './add-portfolio.component.html',
  styleUrls: ['./add-portfolio.component.scss']
})
export class AddPortfolioComponent {
  dialogRef: any;

  constructor(
    public _matDialog: MatDialog
  ) { }  

  onClickAdd(): void {
    this.dialogRef = this._matDialog.open(AddPortfolioDialogComponent);
  }
}
