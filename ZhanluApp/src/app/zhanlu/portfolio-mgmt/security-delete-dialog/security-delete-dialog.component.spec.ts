import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityDeleteDialogComponent } from './security-delete-dialog.component';

describe('SecurityDeleteDialogComponent', () => {
  let component: SecurityDeleteDialogComponent;
  let fixture: ComponentFixture<SecurityDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
