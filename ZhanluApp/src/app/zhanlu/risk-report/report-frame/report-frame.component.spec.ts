import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportFrameComponent } from './report-frame.component';

describe('ReportFrameComponent', () => {
  let component: ReportFrameComponent;
  let fixture: ComponentFixture<ReportFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
