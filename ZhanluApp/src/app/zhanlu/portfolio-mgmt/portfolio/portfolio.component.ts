import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';

export interface PortfolioList {
  id: string;
  name: string;
  updated: string;
}

const LIST: PortfolioList[] = [
  {id: '010011.IB', name: '国债组合', updated: '2018-08-20'},
  {id: '010012.IB', name: '又一个国债组合', updated: '2018-08-20'},
  {id: '010013.IB', name: '还是国债组合', updated: '2018-08-20'},
  {id: '010011.IB', name: '11年国债', updated: '2018-08-20'},
  {id: '010012.IB', name: '又一个国债组合', updated: '2018-08-20'},
  {id: '010013.IB', name: '13年国债', updated: '2018-08-20'},
  {id: '010011.IB', name: '11年国债', updated: '2018-08-20'},
  {id: '010012.IB', name: '又一个国债组合', updated: '2018-08-20'},
  {id: '010013.IB', name: '13年国债', updated: '2018-08-20'},
  {id: '010011.IB', name: '11年国债', updated: '2018-08-20'},
  {id: '010012.IB', name: '又一个国债组合', updated: '2018-08-20'},
  {id: '010013.IB', name: '13年国债', updated: '2018-08-20'},
  {id: '010011.IB', name: '11年国债', updated: '2018-08-20'},
  {id: '010012.IB', name: '又一个国债组合', updated: '2018-08-20'},
  {id: '010013.IB', name: '13年国债', updated: '2018-08-20'},
  {id: '010011.IB', name: '11年国债', updated: '2018-08-20'},
  {id: '010012.IB', name: '又一个国债组合', updated: '2018-08-20'},
  {id: '010013.IB', name: '13年国债', updated: '2018-08-20'},
  {id: '010011.IB', name: '11年国债', updated: '2018-08-20'},
  {id: '010012.IB', name: '又一个国债组合', updated: '2018-08-20'},
  {id: '010013.IB', name: '13年国债', updated: '2018-08-20'},
  {id: '010011.IB', name: '11年国债', updated: '2018-08-20'},
  {id: '010012.IB', name: '又一个国债组合', updated: '2018-08-20'},
  {id: '010013.IB', name: '13年国债', updated: '2018-08-20'},
  {id: '010011.IB', name: '11年国债', updated: '2018-08-20'},
  {id: '010012.IB', name: '又一个国债组合', updated: '2018-08-20'},
  {id: '010013.IB', name: '13年国债', updated: '2018-08-20'},
];

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['../portfolio-mgmt.component.scss']
})

export class PortfolioComponent implements OnInit {

  displayedColumns = ['name', 'updated'];
  dataSource: any;
  selected: any;
  private _url = '../api-fake/portfolio-db.json';

  constructor(
    public _matDialog: MatDialog,
    private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.dataSource = this.httpClient.get<PortfolioList[]>(this._url);
  }

  OnSelect(selected): void {
    console.log(selected);
    this.selected = selected;
  }

}
