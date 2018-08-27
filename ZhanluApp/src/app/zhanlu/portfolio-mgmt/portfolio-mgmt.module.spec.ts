import { PortfolioMgmtModule } from './portfolio-mgmt.module';

describe('PortfolioMgmtModule', () => {
  let portfolioMgmtModule: PortfolioMgmtModule;

  beforeEach(() => {
    portfolioMgmtModule = new PortfolioMgmtModule();
  });

  it('should create an instance', () => {
    expect(portfolioMgmtModule).toBeTruthy();
  });
});
