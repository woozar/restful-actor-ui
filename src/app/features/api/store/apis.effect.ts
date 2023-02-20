import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { appStart } from 'src/app/store/app.actions';
import { StoreModel } from 'src/app/store/store.model';

import { ApiService } from '../services/api.service';
import { loadApis, loadApisFailed, loadApisSuccess } from './apis.actions';
import { loadSelectedApi, loadSelectedApiFailed, loadSelectedApiSuccess, selectApi } from './selected-api.actions';

const SELECTED_API_ID = 'selected-api-id';

@Injectable()
export class ApiEffects {
  public loadApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appStart, loadApis),
      switchMap(() =>
        this.backend.loadApiSpecs().pipe(
          map((apis) => loadApisSuccess(apis)),
          catchError((e) => of(loadApisFailed(e.message)))
        )
      )
    )
  );

  public storeSelectedApi$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(selectApi),
        tap(({ selected }) => (selected ? localStorage.setItem(SELECTED_API_ID, selected) : localStorage.removeItem(SELECTED_API_ID)))
      ),
    { dispatch: false }
  );

  public loadSelectedApi$ = createEffect(() =>
    this.actions$.pipe(
      tap((x) => console.log('debugapi', x)),
      ofType(appStart, loadSelectedApi),
      map(() => {
        const apiId = localStorage.getItem(SELECTED_API_ID);
        if (apiId) return loadSelectedApiSuccess(apiId);
        return loadSelectedApiFailed();
      })
    )
  );

  constructor(private actions$: Actions, private backend: ApiService, private store: Store<StoreModel>) {}
}
