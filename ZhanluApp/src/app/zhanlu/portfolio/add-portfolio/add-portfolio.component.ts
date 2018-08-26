import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddPortfolioDialogComponent } from '../add-portfolio-dialog/add-portfolio-dialog.component';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';

@Component({
  selector: 'app-add-portfolio',
  templateUrl: './add-portfolio.component.html',
  styleUrls: ['./add-portfolio.component.scss']
})
export class AddPortfolioComponent {
  dialogRef: any;

  constructor(
    public _matDialog: MatDialog,
    private _fuseSidebarService: FuseSidebarService
  ) { }  

  onClickAdd(): void {
    this.dialogRef = this._matDialog.open(AddPortfolioDialogComponent);
  }

  toggleSidebar(name): void
  {
      this._fuseSidebarService.getSidebar(name).toggleOpen();
  }
}
