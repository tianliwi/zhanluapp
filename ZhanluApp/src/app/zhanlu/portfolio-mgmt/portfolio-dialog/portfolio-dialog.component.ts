import { Component, OnInit } from '@angular/core';
import { IPortfolioEntry } from '../models/portfolio.model';
import { PortmgmtService } from '../portmgmt.service';

@Component({
  selector: 'app-portfolio-dialog',
  templateUrl: './portfolio-dialog.component.html',
  styleUrls: ['../portfolio-mgmt.component.scss']
})
export class PortfolioDialogComponent implements OnInit {

  private newPortfolio: IPortfolioEntry;
  private newName: string;

  constructor(
    private _service: PortmgmtService
  ) { }

  ngOnInit(): void {
  }

  OnAdd(): void{
    console.log(this.newName);
    this.newPortfolio = {id: '001', name: this.newName, updated: '2018-09-01'};
    this._service.portfolioList.next(this._service.portfolioList.getValue().concat(this.newPortfolio));
  }
}
