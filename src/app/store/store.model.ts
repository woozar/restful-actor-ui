import { ApiSpec } from 'src/graphql/generated';

export interface StoreModel {
  apis: ApiSpec[];
  selectedApi?: string;
  notifications: Notification[];
}
