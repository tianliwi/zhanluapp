import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TradeDialogComponent } from '../trade-dialog/trade-dialog.component';

export interface TradeList {
  bond_id: string;
  trade_date: string;
  par: number;
  price: number;
}

const LIST: TradeList[] = [
  {bond_id: '010011.IB', trade_date: '2018-08-20', par: 150, price: 101.9},
  {bond_id: '010011.IB', trade_date: '2018-08-20', par: 1050, price: 100.5},
  {bond_id: '010011.IB', trade_date: '2018-08-20', par: 500, price: 99.8},
  {bond_id: '010011.IB', trade_date: '2018-08-20', par: 1500, price: 101.9},
  {bond_id: '010011.IB', trade_date: '2018-08-20', par: 150, price: 101.9},
  {bond_id: '010011.IB', trade_date: '2018-08-20', par: 1050, price: 100.5},
  {bond_id: '010011.IB', trade_date: '2018-08-20', par: 500, price: 99.8},
  {bond_id: '010011.IB', trade_date: '2018-08-20', par: 1500, price: 101.9},
  {bond_id: '010011.IB', trade_date: '2018-08-20', par: 150, price: 101.9},
  {bond_id: '010011.IB', trade_date: '2018-08-20', par: 1050, price: 100.5},
  {bond_id: '010011.IB', trade_date: '2018-08-20', par: 500, price: 99.8},
  {bond_id: '010011.IB', trade_date: '2018-08-20', par: 1500, price: 101.9},
  {bond_id: '010011.IB', trade_date: '2018-08-20', par: 150, price: 101.9},
  {bond_id: '010011.IB', trade_date: '2018-08-20', par: 1050, price: 100.5},
  {bond_id: '010011.IB', trade_date: '2018-08-20', par: 500, price: 99.8},
  {bond_id: '010011.IB', trade_date: '2018-08-20', par: 1500, price: 101.9},
  {bond_id: '010011.IB', trade_date: '2018-08-20', par: 150, price: 101.9},
  {bond_id: '010011.IB', trade_date: '2018-08-20', par: 1050, price: 100.5},
  {bond_id: '010011.IB', trade_date: '2018-08-20', par: 500, price: 99.8},
  {bond_id: '010011.IB', trade_date: '2018-08-20', par: 1500, price: 101.9},
  {bond_id: '010011.IB', trade_date: '2018-08-20', par: 150, price: 101.9},
  {bond_id: '010011.IB', trade_date: '2018-08-20', par: 1050, price: 100.5},
  {bond_id: '010011.IB', trade_date: '2018-08-20', par: 500, price: 99.8},
  {bond_id: '010011.IB', trade_date: '2018-08-20', par: 1500, price: 101.9},
];

@Component({
  selector: 'app-trade-list',
  templateUrl: './trade-list.component.html',
  styleUrls: ['./trade-list.component.scss']
})
export class TradeListComponent implements OnInit {

  displayedColumns = ['bond_id', 'trade_date', 'par', 'price', 'edit-button'];
  dataSource = LIST;
  dialogRef: any;

  constructor(
    public _matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  OnClickEdit(row): void {
    this.dialogRef = this._matDialog.open(TradeDialogComponent);
  }
}
