import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddPortfolioComponent } from './add-portfolio/add-portfolio.component';
import { ImportTradeComponent } from './import-trade/import-trade.component';

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
    RouterModule.forChild(routes)
  ],
  declarations: [AddPortfolioComponent, ImportTradeComponent]
})
export class PortfolioModule { }
