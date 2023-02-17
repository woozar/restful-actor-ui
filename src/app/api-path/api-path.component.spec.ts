import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPathComponent } from './api-path.component';

describe('ApiPathComponent', () => {
  let component: ApiPathComponent;
  let fixture: ComponentFixture<ApiPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiPathComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
