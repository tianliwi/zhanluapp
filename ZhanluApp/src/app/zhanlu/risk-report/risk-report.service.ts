import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, EMPTY, Observer } from 'rxjs';
import { RiskReport, ReportSummary } from './models/risk-report.model';

@Injectable()

export class RiskReportService {

  riskReportData: BehaviorSubject<any>;

  constructor(
    private _httpClient: HttpClient
    ) {
      this.riskReportData = new BehaviorSubject({});
    }

  getRiskReport(): Promise<RiskReport> {
    return new Promise((resolve, reject) => {
      this._httpClient.get<RiskReport>('assets/riskreport-db.json')
      .toPromise()
      .then(
        res => {
          this.riskReportData.next(res);
          resolve()
        },
        msg => {
          reject(msg);
        }
      );
    });    
  }
}
