import { Component, OnInit } from '@angular/core';
import { RiskReportService } from '../risk-report.service';
import { RiskReport, Breakdown } from '../models/risk-report.model';

export interface Food {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-portfolio-breakdown',
    templateUrl: './portfolio-breakdown.component.html',
    styleUrls: ['./portfolio-breakdown.component.scss']
})
export class PortfolioBreakdownComponent implements OnInit {
    widget6: any = {};
    data: Breakdown[] = [];
    dataRange: any = {};

    selectedValue: string;

    foods: Food[] = [
        { value: 'steak-0', viewValue: '评级' },
        { value: 'pizza-1', viewValue: '省份' },
        { value: 'tacos-2', viewValue: '息票率' }
    ];

    displayedColumns: string[] = ['name', 'value', 'pct'];

    riskReport: RiskReport;

    constructor(private _riskReportService: RiskReportService) {
        this._riskReportService
            .getRiskReport()
            .then(res =>
                this._riskReportService.riskReportData.subscribe(
                    obj => {
                      this.riskReport = obj;
                      this.updateData();
                    }
                )
            );
        this.widget6 = {
            currentRange: 'TW',
            legend: true,
            explodeSlices: false,
            labels: true,
            doughnut: false,
            gradient: true,
            scheme: {
                domain: ['#f44336', '#9c27b0', '#03a9f4', '#e91e63', '#a342e1']
            },
            onSelect: ev => {
                console.log(ev);
            }
        };

        // this.data = [
        //     {
        //         name: 'Women Dresses',
        //         value: 13
        //     },
        //     {
        //         name: 'Men Shoes',
        //         value: 16
        //     },
        //     {
        //         name: 'Women Shoes',
        //         value: 34
        //     },
        //     {
        //         name: 'Women Bags',
        //         value: 23
        //     },
        //     {
        //         name: 'Men T-Shirts',
        //         value: 14
        //     }
        // ];

        // this.dataRange = {
        //     ranges: {
        //         TW: 'This Week',
        //         LW: 'Last Week',
        //         '2W': '2 Weeks Ago'
        //     }
        // };
    }

    private updateData(): void {
      this.data = [];
      this.riskReport.breakdown_rating.forEach(element => {
        this.data.push(element);
      });
    }

    ngOnInit(): void {}
}
