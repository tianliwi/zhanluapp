import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, EMPTY } from 'rxjs';
import { IPortfolioEntry, ISecurity, ITrade } from './models/portfolio.model';

@Injectable()

export class PortmgmtService {
  onPortfolioSelected: BehaviorSubject<any>;
  onSecuritySelected: BehaviorSubject<any>;

  constructor(
    private _httpClient: HttpClient
  ) { 
    this.onPortfolioSelected = new BehaviorSubject({});
    this.onSecuritySelected = new BehaviorSubject({});
  }

  getPortfolios(): Observable<IPortfolioEntry[]> {
    return this._httpClient.get<IPortfolioEntry[]>('assets/portfolio-db.json');
  }

  getSecurities(portfolio: IPortfolioEntry): Observable<ISecurity[]> {
    if (!portfolio.id) {
      return EMPTY;
    }
    return this._httpClient.get<ISecurity[]>('assets/security-db.json');
  }

  getTrades(security: ISecurity): Observable<ITrade[]> {
    // if (!security) {
    //   return EMPTY;
    // }
    return this._httpClient.get<ITrade[]>('assets/trade-db.json');
  }
}
