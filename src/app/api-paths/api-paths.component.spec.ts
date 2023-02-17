import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPathsComponent } from './api-paths.component';

describe('ApiPathsComponent', () => {
  let component: ApiPathsComponent;
  let fixture: ComponentFixture<ApiPathsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiPathsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiPathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
