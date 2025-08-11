import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableTask4 } from './observable-task4';

describe('ObservableTask4', () => {
  let component: ObservableTask4;
  let fixture: ComponentFixture<ObservableTask4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableTask4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableTask4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
