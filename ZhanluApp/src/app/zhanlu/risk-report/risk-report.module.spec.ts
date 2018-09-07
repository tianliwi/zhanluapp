import { RiskReportModule } from './risk-report.module';

describe('RiskReportModule', () => {
  let riskReportModule: RiskReportModule;

  beforeEach(() => {
    riskReportModule = new RiskReportModule();
  });

  it('should create an instance', () => {
    expect(riskReportModule).toBeTruthy();
  });
});
