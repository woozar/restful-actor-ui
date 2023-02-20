import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, map } from 'rxjs';

import { StoreModel } from '../store/store.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // public notifications$ = this.store.select('notifications');

  public selectedApi$ = combineLatest([this.store.select('selectedApi'), this.store.select('apis')]).pipe(
    map(([selectedApi, apis]) => apis.find((api) => api.id === selectedApi))
  );

  constructor(private store: Store<StoreModel>) {}
}
