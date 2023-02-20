import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatExpansionModule } from '@angular/material/expansion';
import { MockComponent } from 'ng-mocks';

import { Method } from '../../../../../graphql/generated';
import { MethodComponent } from '../method/method.component';
import { MethodsComponent } from './methods.component';

describe('ApiMethodsComponent', () => {
  let component: MethodsComponent;
  let fixture: ComponentFixture<MethodsComponent>;
  let methodsMock: Method[];

  beforeEach(async () => {
    methodsMock = [{ test: 1 }] as unknown as Method[];
    await TestBed.configureTestingModule({
      imports: [MatExpansionModule],
      declarations: [MethodsComponent, MockComponent(MethodComponent)],
    }).compileComponents();

    fixture = TestBed.createComponent(MethodsComponent);
    component = fixture.componentInstance;
    component.methods = methodsMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.methods).toEqual(methodsMock);
  });
});
