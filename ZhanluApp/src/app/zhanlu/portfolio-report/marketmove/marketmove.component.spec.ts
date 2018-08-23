import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketmoveComponent } from './marketmove.component';

describe('MarketmoveComponent', () => {
  let component: MarketmoveComponent;
  let fixture: ComponentFixture<MarketmoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketmoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketmoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
