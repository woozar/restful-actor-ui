import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { loadApis, loadApisFailed, loadApisSuccess } from './apis.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable()
export class ApiEffects {
  public loadApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadApis),
      tap((c) => console.log('load', c)),
      switchMap(() =>
        this.backend.loadApiSpecs().pipe(
          map((apis) => loadApisSuccess(apis)),
          catchError((e) => of(loadApisFailed(e.message)))
        )
      )
    )
  );
  constructor(private actions$: Actions, private backend: ApiService) {}
}
