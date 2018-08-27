import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { 
  MatIconModule, 
  MatButtonModule,
  MatTableModule,
  MatDialogModule,
  MatFormFieldModule,
  MatRippleModule,
  MatCardModule,
  MatTooltipModule,
} from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseHighlightModule } from '@fuse/components/index';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { FuseSidebarModule } from '@fuse/components';

import { PortfolioMgmtComponent } from './portfolio-mgmt.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SecurityComponent } from './security/security.component';
import { TradeComponent } from './trade/trade.component';
import { TradeDialogComponent } from './trade-dialog/trade-dialog.component';
import { SecurityDialogComponent } from './security-dialog/security-dialog.component';
import { PortfolioDialogComponent } from './portfolio-dialog/portfolio-dialog.component';
import { SecurityDeleteDialogComponent } from './security-delete-dialog/security-delete-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioMgmtComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FuseSharedModule,
    FuseHighlightModule,
    FuseWidgetModule,
    FuseSidebarModule,
    MatIconModule, 
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatRippleModule,
    MatCardModule,
    MatTooltipModule,
  ],
  declarations: [
    PortfolioMgmtComponent,
    PortfolioComponent,
    SecurityComponent,
    TradeComponent,
    TradeDialogComponent,
    SecurityDialogComponent,
    PortfolioDialogComponent,
    SecurityDeleteDialogComponent
  ],
  entryComponents: [
    PortfolioDialogComponent,
    SecurityDialogComponent,
    TradeDialogComponent,
    SecurityDeleteDialogComponent
  ]
})
export class PortfolioMgmtModule { }
