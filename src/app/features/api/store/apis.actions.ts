import { createAction } from '@ngrx/store';
import { ApiSpec } from 'src/graphql/generated';

export const clearApis = createAction('[Apis] Clear');
export const loadApis = createAction('[Apis] load');
export const loadApisSuccess = createAction('[Apis] load success', (apiSpecs: ApiSpec[]) => ({ apiSpecs }));
export const loadApisFailed = createAction('[Apis] load failed', (message: string) => ({ message }));
