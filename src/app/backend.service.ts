import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiSpec, GetApiSpecsGQL } from 'src/graphql/generated';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private getApiSpecsGQL: GetApiSpecsGQL) {}

  public loadApiSpecs(): Observable<ApiSpec[]> {
    return this.getApiSpecsGQL.fetch().pipe(map((item) => item.data.getApiSpecs as ApiSpec[]));
  }
}
