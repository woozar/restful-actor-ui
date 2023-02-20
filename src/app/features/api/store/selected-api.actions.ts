import { createAction } from '@ngrx/store';

export const loadSelectedApi = createAction('[Apis] load selected api');
export const loadSelectedApiSuccess = createAction('[Apis] load selected api success', (selectedApiId: string) => ({ selectedApiId }));
export const loadSelectedApiFailed = createAction('[Apis] load selected api failed');
export const selectApi = createAction('[Apis] Select', (selected?: string) => ({ selected }));
