import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatExpansionModule } from '@angular/material/expansion';
import { MockComponent } from 'ng-mocks';
import { Path } from 'src/graphql/generated';

import { ApiPathComponent } from './path.component';

describe('PathComponent', () => {
  let component: ApiPathComponent;
  let fixture: ComponentFixture<ApiPathComponent>;
  let path: Path;

  beforeEach(async () => {
    path = {
      path: '/',
      methods: [],
      parameters: [],
      parent: { id: '', name: '', paths: [], servers: [] },
    };
    await TestBed.configureTestingModule({
      imports: [MatExpansionModule],
      declarations: [ApiPathComponent, MockComponent(ApiPathComponent)],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiPathComponent);
    component = fixture.componentInstance;
    component.path = path;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
