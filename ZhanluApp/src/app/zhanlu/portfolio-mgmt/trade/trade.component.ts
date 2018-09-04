import { Component, OnInit } from '@angular/core';
import { IPortfolioEntry, ISecurity, ITrade } from '../models/portfolio.model';
import { PortmgmtService } from '../portmgmt.service';

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
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['../portfolio-mgmt.component.scss']
})
export class TradeComponent implements OnInit {

  displayedColumns = ['trade_date', 'par', 'price'];
  dataSource: ITrade[] = [];
  selectedSecurity: ISecurity;

  constructor(
    private _portmgmtSerivce: PortmgmtService
  ) { }

  ngOnInit():void {
    this._portmgmtSerivce.getTrades(this.selectedSecurity).subscribe(
      trades => this.dataSource = trades
    );
  }

  OnClickEdit(row): void {
  }

}
