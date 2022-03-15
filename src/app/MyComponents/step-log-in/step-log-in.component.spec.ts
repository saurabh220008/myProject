import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepLogInComponent } from './step-log-in.component';

describe('StepLogInComponent', () => {
  let component: StepLogInComponent;
  let fixture: ComponentFixture<StepLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepLogInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
