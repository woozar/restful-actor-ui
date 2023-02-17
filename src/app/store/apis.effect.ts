import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';
import { loadApis, loadApisFailed, loadApisSuccess } from './apis.actions';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class ApiEffects {
  public loadApis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadApis),
      switchMap(() =>
        this.backend.loadApiSpecs().pipe(
          map((apis) => loadApisSuccess(apis)),
          catchError(() => of(loadApisFailed))
        )
      )
    )
  );
  constructor(private actions$: Actions, private backend: BackendService) {}
}
