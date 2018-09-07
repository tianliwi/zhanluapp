import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyrateDv01Component } from './keyrate-dv01.component';

describe('KeyrateDv01Component', () => {
  let component: KeyrateDv01Component;
  let fixture: ComponentFixture<KeyrateDv01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyrateDv01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyrateDv01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
