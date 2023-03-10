import { createReducer, on } from '@ngrx/store';
import { ApiSpec } from 'src/graphql/generated';

import { clearApis, loadApisSuccess } from './apis.actions';

export const initialState: ApiSpec[] = [];

export const apisReducer = createReducer(
  initialState,
  on(loadApisSuccess, (_state, action) => action.apiSpecs),
  on(clearApis, () => [])
);
