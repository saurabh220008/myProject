import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleEmpComponent } from './view-single-emp.component';

describe('ViewSingleEmpComponent', () => {
  let component: ViewSingleEmpComponent;
  let fixture: ComponentFixture<ViewSingleEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSingleEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSingleEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
