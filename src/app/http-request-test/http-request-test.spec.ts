import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpRequestTest } from './http-request-test';

describe('HttpRequestTest', () => {
  let component: HttpRequestTest;
  let fixture: ComponentFixture<HttpRequestTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpRequestTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpRequestTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
