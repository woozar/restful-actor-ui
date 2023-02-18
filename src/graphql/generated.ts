import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ApiCallback = {
  __typename?: 'ApiCallback';
  name: Scalars['String'];
  namespace: Array<Scalars['String']>;
  parent: ApiMethod;
  urls: Array<ApiCallbackUrl>;
};

export type ApiCallbackUrl = {
  __typename?: 'ApiCallbackUrl';
  methods: Array<ApiMethod>;
  namespace: Array<Scalars['String']>;
  parent: ApiCallback;
  url: Scalars['String'];
};

export type ApiMethod = {
  __typename?: 'ApiMethod';
  callbacks: Array<ApiCallback>;
  description?: Maybe<Scalars['String']>;
  method: Method;
  operationId: Scalars['String'];
  parameters: Array<ApiParameter>;
  parent: ApiMethodParent;
  requestBody: Array<HttpContent>;
  responses: Array<ApiResponse>;
  summary?: Maybe<Scalars['String']>;
};

export type ApiMethodParent = ApiCallbackUrl | ApiPath;

export type ApiParameter = {
  __typename?: 'ApiParameter';
  /** the example for the object serialized as string */
  example?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  namespace: Array<Scalars['String']>;
  paramIn: ParameterIn;
  parent: ParameterParent;
  required: Scalars['Boolean'];
  schema: Scalars['String'];
};

export type ApiPath = {
  __typename?: 'ApiPath';
  description?: Maybe<Scalars['String']>;
  methods: Array<ApiMethod>;
  parameters: Array<ApiParameter>;
  parent: ApiSpec;
  path: Scalars['String'];
};

export type ApiResponse = {
  __typename?: 'ApiResponse';
  code: Scalars['Int'];
  contents: Array<HttpContent>;
  description?: Maybe<Scalars['String']>;
  headers: Array<HttpHeader>;
  parent: ApiMethod;
};

export type ApiServer = {
  __typename?: 'ApiServer';
  description?: Maybe<Scalars['String']>;
  namespace: Array<Scalars['String']>;
  parent: ApiSpec;
  url: Scalars['String'];
  variables: Array<ApiVariable>;
};

export type ApiSpec = {
  __typename?: 'ApiSpec';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  paths: Array<ApiPath>;
  servers: Array<ApiServer>;
};

export type ApiVariable = {
  __typename?: 'ApiVariable';
  default: Array<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  enum?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  namespace: Array<Scalars['String']>;
};

export type HttpContent = {
  __typename?: 'HttpContent';
  description?: Maybe<Scalars['String']>;
  example?: Maybe<Scalars['String']>;
  mimetype: Scalars['String'];
  parent: HttpContentParent;
  schema: Scalars['String'];
};

export type HttpContentParent = ApiMethod | ApiResponse;

export type HttpHeader = {
  __typename?: 'HttpHeader';
  description?: Maybe<Scalars['String']>;
  example?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parent: ApiResponse;
  schema: Scalars['String'];
};

export enum Method {
  Delete = 'delete',
  Get = 'get',
  Head = 'head',
  Post = 'post',
  Put = 'put',
}

export type Notification = {
  __typename?: 'Notification';
  event: NotificationEvent;
  id: Scalars['String'];
  message: Scalars['String'];
};

export enum NotificationEvent {
  Created = 'Created',
  Deleted = 'Deleted',
  Updated = 'Updated',
}

export enum ParameterIn {
  Header = 'Header',
  Path = 'Path',
  Query = 'Query',
}

export type ParameterParent = ApiMethod | ApiPath;

export type Query = {
  __typename?: 'Query';
  getApiSpec: ApiSpec;
  getApiSpecs: Array<ApiSpec>;
  getNotifications: Array<Notification>;
};

export type QueryGetApiSpecArgs = {
  id: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  notifications: Notification;
};

export type GetApiSpecsQueryVariables = Exact<{ [key: string]: never }>;

export type GetApiSpecsQuery = {
  __typename?: 'Query';
  getApiSpecs: Array<{
    __typename?: 'ApiSpec';
    id: string;
    name: string;
    servers: Array<{ __typename?: 'ApiServer'; url: string; description?: string | null }>;
    paths: Array<{
      __typename?: 'ApiPath';
      path: string;
      description?: string | null;
      parameters: Array<{ __typename?: 'ApiParameter'; name: string; example?: string | null }>;
      methods: Array<{
        __typename?: 'ApiMethod';
        method: Method;
        operationId: string;
        parameters: Array<{ __typename?: 'ApiParameter'; name: string; example?: string | null; namespace: Array<string>; paramIn: ParameterIn }>;
        responses: Array<{
          __typename?: 'ApiResponse';
          code: number;
          description?: string | null;
          contents: Array<{ __typename?: 'HttpContent'; description?: string | null; example?: string | null; mimetype: string; schema: string }>;
          headers: Array<{ __typename?: 'HttpHeader'; description?: string | null; example?: string | null; name: string; schema: string }>;
        }>;
      }>;
    }>;
  }>;
};

export type NotificationsSubscriptionVariables = Exact<{ [key: string]: never }>;

export type NotificationsSubscription = { __typename?: 'Subscription'; notifications: { __typename?: 'Notification'; event: NotificationEvent } };

export const GetApiSpecsDocument = gql`
  query getApiSpecs {
    getApiSpecs {
      id
      name
      servers {
        url
        description
      }
      paths {
        path
        description
        parameters {
          name
          example
        }
        methods {
          method
          operationId
          parameters {
            name
            example
            namespace
            paramIn
          }
          responses {
            code
            description
            contents {
              description
              example
              mimetype
              schema
            }
            headers {
              description
              example
              name
              schema
            }
          }
        }
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class GetApiSpecsGQL extends Apollo.Query<GetApiSpecsQuery, GetApiSpecsQueryVariables> {
  override document = GetApiSpecsDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const NotificationsDocument = gql`
  subscription notifications {
    notifications {
      event
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class NotificationsGQL extends Apollo.Subscription<NotificationsSubscription, NotificationsSubscriptionVariables> {
  override document = NotificationsDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
