import { TestBed } from '@angular/core/testing';
import { GetApiSpecsGQL, NotificationsGQL } from 'src/graphql/generated';
import { instance, mock } from 'ts-mockito';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let getApiMock: GetApiSpecsGQL;
  let notiMock: NotificationsGQL;

  beforeEach(() => {
    getApiMock = mock(GetApiSpecsGQL);
    notiMock = mock(NotificationsGQL);
    TestBed.configureTestingModule({
      providers: [
        { provide: GetApiSpecsGQL, useValue: instance(getApiMock) },
        { provide: NotificationsGQL, useValue: instance(notiMock) },
      ],
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
