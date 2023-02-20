import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { StoreModel } from '../store/store.model';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: MockStore<StoreModel>;
  const initialState: StoreModel = { apis: [], notifications: [] };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      providers: [provideMockStore({ initialState })],
      declarations: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.inject(Store) as MockStore<StoreModel>;
  });

  it('should create', () => {
    store.setState({ apis: [], notifications: [] });
    expect(component).toBeTruthy();
  });
});
