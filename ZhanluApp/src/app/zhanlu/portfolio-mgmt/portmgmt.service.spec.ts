import { TestBed, inject } from '@angular/core/testing';

import { PortmgmtService } from './portmgmt.service';

describe('PortmgmtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortmgmtService]
    });
  });

  it('should be created', inject([PortmgmtService], (service: PortmgmtService) => {
    expect(service).toBeTruthy();
  }));
});
