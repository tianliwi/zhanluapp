import { Component, OnInit } from '@angular/core';
import { ReportSummary, RiskReport } from '../models/risk-report.model';
import { RiskReportService } from '../risk-report.service';

@Component({
  selector: 'app-portfolio-summary',
  templateUrl: './portfolio-summary.component.html',
  styleUrls: ['./portfolio-summary.component.scss']
})

export class PortfolioSummaryComponent implements OnInit {

  riskReport: RiskReport;

  constructor(
    private _riskReportService: RiskReportService
  ) { 
    this.riskReport = new RiskReport();
  }

  ngOnInit(): void {
    this._riskReportService.getRiskReport()
    .then(res => this._riskReportService.riskReportData.subscribe(obj => this.riskReport = obj));
  }

}
