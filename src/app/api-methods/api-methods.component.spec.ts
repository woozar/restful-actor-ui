import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiMethodsComponent } from './api-methods.component';

describe('ApiMethodsComponent', () => {
  let component: ApiMethodsComponent;
  let fixture: ComponentFixture<ApiMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiMethodsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
