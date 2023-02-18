import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiSpec, GetApiSpecsGQL, NotificationsGQL, NotificationsSubscription } from 'src/graphql/generated';
import { isDefined } from '../../../utilities/is-defined.filter';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private getApiSpecsGQL: GetApiSpecsGQL, private notifications: NotificationsGQL) {}

  public loadApiSpecs(): Observable<ApiSpec[]> {
    return this.getApiSpecsGQL.fetch().pipe(map((item) => item.data.getApiSpecs as ApiSpec[]));
  }

  public subscribeNotifications(): Observable<NotificationsSubscription> {
    return this.notifications.subscribe().pipe(
      map((result) => {
        if (result.errors) {
          throw new Error(JSON.stringify(result.errors));
        }
        return result;
      }),
      map((result) => result.data),
      isDefined()
    );
  }
}
