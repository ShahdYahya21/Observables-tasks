import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableTask3 } from './observable-task3';

describe('ObservableTask3', () => {
  let component: ObservableTask3;
  let fixture: ComponentFixture<ObservableTask3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableTask3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableTask3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
