import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AddPortfolioComponent } from './add-portfolio/add-portfolio.component';
import { ImportTradeComponent } from './import-trade/import-trade.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { AddPortfolioDialogComponent } from './add-portfolio-dialog/add-portfolio-dialog.component';
import { TradeListComponent } from './trade-list/trade-list.component';
import { TradeDialogComponent } from './trade-dialog/trade-dialog.component';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseHighlightModule } from '@fuse/components/index';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { FuseSidebarModule } from '@fuse/components';

import { 
  MatIconModule, 
  MatButtonModule,
  MatTableModule,
  MatDialogModule,
  MatFormFieldModule,
  MatRippleModule
} from '@angular/material';
  
const routes: Routes = [
  {
    path: 'addportfolio',
    component: AddPortfolioComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FuseSharedModule,
    FuseHighlightModule,
    FuseWidgetModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    FuseSidebarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatRippleModule
  ],
  declarations: [
    AddPortfolioComponent, 
    ImportTradeComponent, 
    PortfolioListComponent, 
    AddPortfolioDialogComponent,
    TradeListComponent,
    TradeDialogComponent
  ],
  entryComponents: [
    AddPortfolioDialogComponent,    
    TradeDialogComponent
  ]
})
export class PortfolioModule { }
