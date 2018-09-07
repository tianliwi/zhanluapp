import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskSnapshotComponent } from './risk-snapshot.component';

describe('RiskSnapshotComponent', () => {
  let component: RiskSnapshotComponent;
  let fixture: ComponentFixture<RiskSnapshotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskSnapshotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
