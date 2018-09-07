import { Component, OnInit } from '@angular/core';

export interface Section {
  name: string;
  value: string;
}

@Component({
  selector: 'app-portfolio-summary',
  templateUrl: './portfolio-summary.component.html',
  styleUrls: ['./portfolio-summary.component.scss']
})
export class PortfolioSummaryComponent implements OnInit {
  
  notes: Section[] = [
    {
      name: '总面值',
      value: '$5,000,000.00'
    },
    {
      name: '总市值',
      value: '$5,296,452.00'
    },
    {
      name: '累计利息',
      value: '$32,603.40'
    },
    {
      name: '总价值',
      value: '$5,329,055.90'
    },
    {
      name: '年收入估值',
      value: '$165,777.50'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
