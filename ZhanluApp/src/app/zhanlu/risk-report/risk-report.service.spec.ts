import { TestBed, inject } from '@angular/core/testing';

import { RiskReportService } from './risk-report.service';

describe('RiskReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RiskReportService]
    });
  });

  it('should be created', inject([RiskReportService], (service: RiskReportService) => {
    expect(service).toBeTruthy();
  }));
});
