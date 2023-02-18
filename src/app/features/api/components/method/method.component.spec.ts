import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodComponent } from './method.component';

describe('ApiMethodComponent', () => {
  let component: MethodComponent;
  let fixture: ComponentFixture<MethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MethodComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
