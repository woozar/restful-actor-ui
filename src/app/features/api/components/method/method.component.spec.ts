import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatExpansionModule } from '@angular/material/expansion';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MockComponent, ngMocks } from 'ng-mocks';

import { ApiMethods, Path, Response } from '../../../../../graphql/generated';
import { ApiResponseComponent } from '../response/response.component';
import { ApiResponsesComponent } from '../responses/responses.component';
import { MethodComponent } from './method.component';

describe('ApiMethodComponent', () => {
  let component: MethodComponent;
  let fixture: ComponentFixture<MethodComponent>;
  let responseMocks: Response[];

  beforeEach(async () => {
    responseMocks = [{ test: 1 }, { test: 2 }] as unknown as Response[];
    await TestBed.configureTestingModule({
      imports: [MatExpansionModule, NoopAnimationsModule],
      declarations: [MethodComponent, ApiResponsesComponent, MockComponent(ApiResponseComponent)],
    }).compileComponents();

    fixture = TestBed.createComponent(MethodComponent);
    component = fixture.componentInstance;
  });

  it('should have a child for api responses', () => {
    component.method = {
      method: ApiMethods.Post,
      operationId: 'createFilter',
      parameters: [],
      parent: { namespace: ['parent'] } as unknown as Path,
      requestBody: [],
      callbacks: [],
      responses: responseMocks,
    };
    fixture.detectChanges();
    expect(component).toBeTruthy();
    const mockComponent = ngMocks.find<ApiResponsesComponent>('api-responses').componentInstance;
    expect(mockComponent).toBeDefined();
    expect(mockComponent.responses).toEqual(responseMocks);
  });

  it('should throw an error when created without method', (done) => {
    try {
      fixture.detectChanges();
    } catch (e) {
      expect(e).toEqual(new Error('Input method must not be undefined'));
      done();
    }
  });
});
