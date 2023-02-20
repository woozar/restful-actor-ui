import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSelectHarness } from '@angular/material/select/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Action, Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { instance, mock } from 'ts-mockito';

import { ApiService } from '../features/api/services/api.service';
import { selectApi } from '../features/api/store/selected-api.actions';
import { StoreModel } from '../store/store.model';
import { NavbarComponent } from './navbar.component';

fdescribe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let apiServiceMock: ApiService;
  let store: MockStore<StoreModel>;
  let loader: HarnessLoader;
  let page: { selectApi: MatSelectHarness };

  beforeEach(async () => {
    apiServiceMock = mock(ApiService);
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [
        {
          provide: ApiService,
          useValue: instance(apiServiceMock),
        },
        provideMockStore({ initialState: { apis: [], notifications: [] } }),
      ],
      imports: [MatToolbarModule, MatSelectModule, FormsModule, ReactiveFormsModule, NoopAnimationsModule],
    }).compileComponents();
    store = TestBed.inject(Store) as MockStore<StoreModel>;

    fixture = TestBed.createComponent(NavbarComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
    page = {
      selectApi: await loader.getHarness(MatSelectHarness),
    };
  });

  afterEach(() => {
    // localStorage.getItem(SELECTED_API)
  });

  it('displays the list of apis', async () => {
    const actions: Action[] = [];
    store.scannedActions$.subscribe((a) => actions.push(a));
    expect(component).toBeTruthy();
    const stateWithApiList = {
      apis: [
        { id: 'test api1', name: 'test api1', paths: [], servers: [] },
        { id: 'test api2', name: 'test api2', paths: [], servers: [] },
      ],
      notifications: [],
    };
    store.setState(stateWithApiList);
    await page.selectApi.open();
    const options = await page.selectApi.getOptions();
    expect(options).toHaveSize(2);
    expect(await options[0].getText()).toEqual('test api1');
    await options[1].click();
    expect(actions).toContain(selectApi(stateWithApiList.apis[1].id));
  });
});
