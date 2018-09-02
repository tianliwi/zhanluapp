import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { SecurityDeleteDialogComponent } from '../security-delete-dialog/security-delete-dialog.component';
export interface SecurityList {
  id: string;
  name: string;
  par: number;
  updated: string;
}

const LIST: SecurityList[] = [
  {id: '010011.IB', name: '11年国债', par: 150, updated: '2018-08-20'},
  {id: '010012.IB', name: '12年国债', par: 250, updated: '2018-08-20'},
  {id: '010013.IB', name: '13年国债', par: 350, updated: '2018-08-20'},
  {id: '010011.IB', name: '11年国债', par: 150, updated: '2018-08-20'},
  {id: '010012.IB', name: '12年国债', par: 250, updated: '2018-08-20'},
  {id: '010013.IB', name: '13年国债', par: 350, updated: '2018-08-20'},
  {id: '010011.IB', name: '11年国债', par: 150, updated: '2018-08-20'},
  {id: '010012.IB', name: '12年国债', par: 250, updated: '2018-08-20'},
  {id: '010013.IB', name: '13年国债', par: 350, updated: '2018-08-20'},
  {id: '010011.IB', name: '11年国债', par: 150, updated: '2018-08-20'},
  {id: '010012.IB', name: '12年国债', par: 250, updated: '2018-08-20'},
  {id: '010013.IB', name: '13年国债', par: 350, updated: '2018-08-20'},
  {id: '010011.IB', name: '11年国债', par: 150, updated: '2018-08-20'},
  {id: '010012.IB', name: '12年国债', par: 250, updated: '2018-08-20'},
  {id: '010013.IB', name: '13年国债', par: 350, updated: '2018-08-20'},
  {id: '010011.IB', name: '11年国债', par: 150, updated: '2018-08-20'},
  {id: '010012.IB', name: '12年国债', par: 250, updated: '2018-08-20'},
  {id: '010013.IB', name: '13年国债', par: 350, updated: '2018-08-20'},
  {id: '010011.IB', name: '11年国债', par: 150, updated: '2018-08-20'},
  {id: '010012.IB', name: '12年国债', par: 250, updated: '2018-08-20'},
  {id: '010013.IB', name: '13年国债', par: 350, updated: '2018-08-20'},
  {id: '010011.IB', name: '11年国债', par: 150, updated: '2018-08-20'},
  {id: '010012.IB', name: '12年国债', par: 250, updated: '2018-08-20'},
  {id: '010013.IB', name: '13年国债', par: 350, updated: '2018-08-20'},
  {id: '010011.IB', name: '11年国债', par: 150, updated: '2018-08-20'},
  {id: '010012.IB', name: '12年国债', par: 250, updated: '2018-08-20'},
  {id: '010013.IB', name: '13年国债', par: 350, updated: '2018-08-20'},
];

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['../portfolio-mgmt.component.scss']
})
export class SecurityComponent implements OnInit {

  displayedColumns = ['id', 'name', 'par', 'updated', 'detail-button'];
  dataSource = LIST;
  selected: any;
  dialogRef: any;

  constructor(
    public _matDialog: MatDialog,
    private _fuseSidebarService: FuseSidebarService) { }

  ngOnInit(): void {
  }

  OnSelect(selected): void {
    console.log(selected);
    this.selected = selected;
  }

  OnDelete(row): void {
    console.log(row);
    this.dialogRef = this._matDialog.open(SecurityDeleteDialogComponent);
  }

  OnDoubleClick(selected): void {
    console.log(selected.id);
  }

  toggleSidebar(name): void {
    this._fuseSidebarService.getSidebar(name).toggleOpen();
  }

}
