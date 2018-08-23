import { PortfolioReportModule } from './portfolio-report.module';

describe('PortfolioReportModule', () => {
  let portfolioReportModule: PortfolioReportModule;

  beforeEach(() => {
    portfolioReportModule = new PortfolioReportModule();
  });

  it('should create an instance', () => {
    expect(portfolioReportModule).toBeTruthy();
  });
});
