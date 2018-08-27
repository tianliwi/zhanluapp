import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { PortfolioDialogComponent } from './portfolio-dialog/portfolio-dialog.component';
import { TradeDialogComponent } from './trade-dialog/trade-dialog.component';
import { SecurityDialogComponent } from './security-dialog/security-dialog.component';

@Component({
  selector: 'app-portfolio-mgmt',
  templateUrl: './portfolio-mgmt.component.html',
  styleUrls: ['./portfolio-mgmt.component.scss']
})
export class PortfolioMgmtComponent implements OnInit {

  dialogRef: any;

  constructor(
    public _matDialog: MatDialog,
    private _fuseSidebarService: FuseSidebarService) { }

  ngOnInit(): void {
  }
  
  OnClickPortfolioAdd(): void{
    this.dialogRef = this._matDialog.open(PortfolioDialogComponent);
  }
  
  OnClickSecurityAdd(): void{
    this.dialogRef = this._matDialog.open(SecurityDialogComponent);
  }
  
  OnClickTradeAdd(): void{
    this.dialogRef = this._matDialog.open(TradeDialogComponent);
  }
  
  toggleSidebar(name): void {
    this._fuseSidebarService.getSidebar(name).toggleOpen();
  }

}
