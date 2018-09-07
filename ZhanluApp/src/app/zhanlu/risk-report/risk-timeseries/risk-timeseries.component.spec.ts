import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskTimeseriesComponent } from './risk-timeseries.component';

describe('RiskTimeseriesComponent', () => {
  let component: RiskTimeseriesComponent;
  let fixture: ComponentFixture<RiskTimeseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskTimeseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskTimeseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
