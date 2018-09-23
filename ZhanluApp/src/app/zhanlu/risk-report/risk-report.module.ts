import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiskReportComponent } from './risk-report.component';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioSelectorComponent } from './portfolio-selector/portfolio-selector.component';
import { ReportFrameComponent } from './report-frame/report-frame.component';
import { PortfolioSummaryComponent } from './portfolio-summary/portfolio-summary.component';
import { PortfolioBreakdownComponent } from './portfolio-breakdown/portfolio-breakdown.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatRippleModule,
    MatCardModule,
    MatTooltipModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule
} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseHighlightModule } from '@fuse/components/index';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { FuseSidebarModule } from '@fuse/components';
import { CashflowComponent } from './cashflow/cashflow.component';
import { KeyrateDurationComponent } from './keyrate-duration/keyrate-duration.component';
import { KeyrateDv01Component } from './keyrate-dv01/keyrate-dv01.component';
import { RiskSnapshotComponent } from './risk-snapshot/risk-snapshot.component';
import { RiskTimeseriesComponent } from './risk-timeseries/risk-timeseries.component';
import { RiskReportService } from './risk-report.service';

const routes: Routes = [
    {
        path: '',
        component: RiskReportComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        MatDialogModule,
        MatFormFieldModule,
        MatRippleModule,
        MatCardModule,
        MatTooltipModule,
        MatInputModule,
        MatToolbarModule,
        FuseSharedModule,
        FuseHighlightModule,
        FuseWidgetModule,
        FuseSidebarModule,
        MatTabsModule,
        MatListModule,
        NgxChartsModule,
        MatSelectModule
    ],
    declarations: [
        RiskReportComponent,
        PortfolioSelectorComponent,
        ReportFrameComponent,
        PortfolioSummaryComponent,
        PortfolioBreakdownComponent,
        CashflowComponent,
        KeyrateDurationComponent,
        KeyrateDv01Component,
        RiskSnapshotComponent,
        RiskTimeseriesComponent
    ],,
    providers: [
      RiskReportService
    ]
})
export class RiskReportModule {}
