import { TestBed } from '@angular/core/testing';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MockComponent } from 'ng-mocks';
import { instance, mock } from 'ts-mockito';

import { AppComponent } from './app.component';
import { ApiService } from './features/api/services/api.service';
import { loadApisSuccess } from './features/api/store/apis.actions';
import { NavbarComponent } from './navbar/navbar.component';
import { StoreModel } from './store/store.model';

describe('AppComponent', () => {
  let apiServiceMock: ApiService;
  let store: MockStore<StoreModel>;
  const initialState: StoreModel = { apis: [], notifications: [] };

  beforeEach(async () => {
    apiServiceMock = mock(ApiService);
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatToolbarModule, MatExpansionModule],
      providers: [
        {
          provide: ApiService,
          useValue: instance(apiServiceMock),
        },
        provideMockStore({ initialState }),
      ],
      declarations: [AppComponent, MockComponent(NavbarComponent)],
    }).compileComponents();
    store = TestBed.inject(Store) as unknown as MockStore<StoreModel>;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    store.next(loadApisSuccess);
    expect(app).toBeTruthy();
  });
});
