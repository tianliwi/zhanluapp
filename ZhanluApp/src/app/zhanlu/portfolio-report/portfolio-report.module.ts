import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealtimeComponent } from './realtime/realtime.component';
import { HoldingComponent } from './holding/holding.component';
import { ProfitlossComponent } from './profitloss/profitloss.component';
import { AssetcomboComponent } from './assetcombo/assetcombo.component';
import { MarketmoveComponent } from './marketmove/marketmove.component';
import { LookupComponent } from './lookup/lookup.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'realtime',
    component: RealtimeComponent
  },
  {
    path: 'holding',
    component: HoldingComponent
  },
  {
    path: 'profitloss',
    component: ProfitlossComponent
  },
  {
    path: 'asset',
    component: AssetcomboComponent
  },
  {
    path: 'market',
    component: MarketmoveComponent
  },
  {
    path: 'lookup',
    component: LookupComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RealtimeComponent, 
    HoldingComponent, 
    ProfitlossComponent, 
    AssetcomboComponent, 
    MarketmoveComponent, 
    LookupComponent]
})
export class PortfolioReportModule { }
