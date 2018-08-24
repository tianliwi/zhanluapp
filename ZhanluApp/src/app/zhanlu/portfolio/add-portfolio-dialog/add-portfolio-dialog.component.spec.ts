import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPortfolioDialogComponent } from './add-portfolio-dialog.component';

describe('AddPortfolioDialogComponent', () => {
  let component: AddPortfolioDialogComponent;
  let fixture: ComponentFixture<AddPortfolioDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPortfolioDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPortfolioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
