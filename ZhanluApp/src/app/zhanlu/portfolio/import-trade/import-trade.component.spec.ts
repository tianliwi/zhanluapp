import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportTradeComponent } from './import-trade.component';

describe('ImportTradeComponent', () => {
  let component: ImportTradeComponent;
  let fixture: ComponentFixture<ImportTradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportTradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
