import { createReducer, on } from '@ngrx/store';

import { loadSelectedApiSuccess, selectApi } from './selected-api.actions';

export const initialState: string | undefined = undefined;

export const selectedApiReducer = createReducer<string | undefined>(
  initialState,
  on(selectApi, (_state, { selected }) => selected),
  on(loadSelectedApiSuccess, (_state, { selectedApiId }) => selectedApiId)
);
