import { Component, OnInit } from '@angular/core';
import { RiskReport } from './models/risk-report.model';
import { RiskReportService } from './risk-report.service';

@Component({
  selector: 'app-risk-report',
  templateUrl: './risk-report.component.html',
  styleUrls: ['./risk-report.component.scss']
})
export class RiskReportComponent implements OnInit {

  report_obj: RiskReport;

  constructor(
    private _riskReportService: RiskReportService
  ) { 
    this.report_obj = new RiskReport();
  }

  ngOnInit(): void {
    // this._riskReportService.getRiskReport()
    //   .then(res => this._riskReportService.riskReportData.subscribe(obj => this.report_obj = obj));
    this._riskReportService.riskReportData.subscribe(obj => this.report_obj = obj);
    
  }

  onClick(): void{
    console.log(this.report_obj);
  }
}
