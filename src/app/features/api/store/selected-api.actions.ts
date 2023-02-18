import { createAction } from '@ngrx/store';
import { ApiSpec } from 'src/graphql/generated';

export const selectApi = createAction('[Apis] Select', (selected: ApiSpec | null) => ({ selected }));
