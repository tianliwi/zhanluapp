import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetcomboComponent } from './assetcombo.component';

describe('AssetcomboComponent', () => {
  let component: AssetcomboComponent;
  let fixture: ComponentFixture<AssetcomboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetcomboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetcomboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
