import { createReducer, on } from '@ngrx/store';
import { ApiSpec } from 'src/graphql/generated';
import { selectApi } from './selected-api.actions';

export const initialState: ApiSpec | null = null;

export const selectedApiReducer = createReducer<ApiSpec | null>(
  initialState,
  on(selectApi, (_state, { selected }) => selected)
);
