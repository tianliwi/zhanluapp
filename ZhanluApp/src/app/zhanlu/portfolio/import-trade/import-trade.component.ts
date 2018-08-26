import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TradeDialogComponent } from '../trade-dialog/trade-dialog.component';

import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-import-trade',
  templateUrl: './import-trade.component.html',
  styleUrls: ['./import-trade.component.scss'],
  animations : fuseAnimations
})
export class ImportTradeComponent implements OnInit {

  dialogRef: any;

  constructor(
    public _matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClickAdd(): void {
    this.dialogRef = this._matDialog.open(TradeDialogComponent);
  }
}
