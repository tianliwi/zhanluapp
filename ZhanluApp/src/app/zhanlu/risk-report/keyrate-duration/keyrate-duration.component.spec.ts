import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyrateDurationComponent } from './keyrate-duration.component';

describe('KeyrateDurationComponent', () => {
  let component: KeyrateDurationComponent;
  let fixture: ComponentFixture<KeyrateDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyrateDurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyrateDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
