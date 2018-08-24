import { Component, OnInit } from '@angular/core';

export interface PortList {
  id: string;
  name: string;
  par: number;
  updated: string;
}

const LIST: PortList[] = [
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
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})

export class PortfolioListComponent implements OnInit {

  displayedColumns = ['id', 'name', 'par', 'updated'];
  dataSource = LIST;
  constructor() { }

  ngOnInit(): void {
  }
}
