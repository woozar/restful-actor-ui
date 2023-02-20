import { createAction } from '@ngrx/store';
import { ApiSpec } from 'src/graphql/generated';

export const apiStartUp = createAction('[Apis] Startup');
export const clearApis = createAction('[Apis] Clear');
export const loadApis = createAction('[Apis] load apis');
export const loadApisSuccess = createAction('[Apis] load apis success', (apiSpecs: ApiSpec[]) => ({ apiSpecs }));
export const loadApisFailed = createAction('[Apis] load apis failed', (message: string) => ({ message }));
