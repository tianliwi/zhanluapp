import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { IPortfolioEntry } from '../models/portfolio.model';
import { PortmgmtService } from '../portmgmt.service';
 
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['../portfolio-mgmt.component.scss']
})

export class PortfolioComponent implements OnInit {

  displayedColumns = ['name', 'updated'];
  dataSource: IPortfolioEntry[];
  selected: any;

  constructor(
    public _matDialog: MatDialog,
    private _portmgmtService: PortmgmtService,
    private _httpClient: HttpClient) { 
    }

  ngOnInit(): void { 
    this._portmgmtService.getPortfolios()
      .then(res => this._portmgmtService.portfolioList.subscribe(list => this.dataSource = list));
  }

  OnSelect(selected): void {
    this.selected = selected;
    this._portmgmtService.onPortfolioSelected.next(selected);
  }

}
