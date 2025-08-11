import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableTask2 } from './observable-task2';

describe('ObservableTask2', () => {
  let component: ObservableTask2;
  let fixture: ComponentFixture<ObservableTask2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableTask2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableTask2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
