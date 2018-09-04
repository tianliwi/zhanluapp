import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { SecurityDeleteDialogComponent } from '../security-delete-dialog/security-delete-dialog.component';
import { IPortfolioEntry, ISecurity } from '../models/portfolio.model';
import { PortmgmtService } from '../portmgmt.service';

export interface SecurityList {
  id: string;
  name: string;
  par: number;
  updated: string;
}

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['../portfolio-mgmt.component.scss']
})
export class SecurityComponent implements OnInit {

  displayedColumns = ['id', 'name', 'par', 'updated', 'detail-button'];
  dataSource: ISecurity[] = [];
  selected: any;
  dialogRef: any;
  selectedPortfolio: IPortfolioEntry;

  constructor(
    public _matDialog: MatDialog,
    private _fuseSidebarService: FuseSidebarService,
    private _portmgmtService: PortmgmtService) { }

  ngOnInit(): void {
    this._portmgmtService.onPortfolioSelected.subscribe(portfolio => this.selectedPortfolio = portfolio);
    this._portmgmtService.getSecurities(this.selectedPortfolio).subscribe(securities => this.dataSource = securities);
  }

  OnSelect(selected): void {
    this.selected = selected;
    this._portmgmtService.onSecuritySelected.next(selected);
  }

  OnDelete(row): void {
    console.log(row);
    this.dialogRef = this._matDialog.open(SecurityDeleteDialogComponent);
  }

  toggleSidebar(name): void {
    this._fuseSidebarService.getSidebar(name).toggleOpen();
  }

}
