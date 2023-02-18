import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiResponsesComponent } from './responses.component';

describe('ApiResponsesComponent', () => {
  let component: ApiResponsesComponent;
  let fixture: ComponentFixture<ApiResponsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiResponsesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
