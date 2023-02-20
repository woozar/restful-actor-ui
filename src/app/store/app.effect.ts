import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { mergeMap } from 'rxjs';

import { loadApis } from '../features/api/store/apis.actions';
import { loadSelectedApi } from '../features/api/store/selected-api.actions';
import { appStart } from './app.actions';
import { StoreModel } from './store.model';

@Injectable()
export class ApiEffects {
  public loadApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appStart),
      mergeMap(() => [loadApis(), loadSelectedApi()])
    )
  );

  constructor(private actions$: Actions, private store: Store<StoreModel>) {}
}
