import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { Method } from '../../../../../graphql/generated';
import { ApiResponseComponent } from './response.component';

describe('ResponseComponent', () => {
  let component: ApiResponseComponent;
  let fixture: ComponentFixture<ApiResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatExpansionModule, FormsModule, ReactiveFormsModule, NoopAnimationsModule, MatSelectModule],
      declarations: [ApiResponseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiResponseComponent);
    component = fixture.componentInstance;
    component.response = { code: 200, contents: [], headers: [], parent: {} as Method };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
