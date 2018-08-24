import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AddPortfolioComponent } from './add-portfolio/add-portfolio.component';
import { ImportTradeComponent } from './import-trade/import-trade.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseHighlightModule } from '@fuse/components/index';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { FuseSidebarModule } from '@fuse/components';

import { 
  MatIconModule, 
  MatButtonModule,
  MatTableModule } from '@angular/material';
  
const routes: Routes = [
  {
    path: 'addportfolio',
    component: AddPortfolioComponent
  },
  {
    path: 'importtrade',
    component: ImportTradeComponent
  }
]

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
    FuseSidebarModule
  ],
  declarations: [
    AddPortfolioComponent, 
    ImportTradeComponent, 
    PortfolioListComponent]
})
export class PortfolioModule { }
