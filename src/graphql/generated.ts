import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
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

export type ApiMethodParent = CallbackUrl | Path;

export enum ApiMethods {
  Delete = 'delete',
  Get = 'get',
  Head = 'head',
  Post = 'post',
  Put = 'put',
}

export type ApiSpec = {
  __typename?: 'ApiSpec';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  paths: Array<Path>;
  servers: Array<Server>;
};

export type Callback = {
  __typename?: 'Callback';
  name: Scalars['String'];
  namespace: Array<Scalars['String']>;
  parent: Method;
  urls: Array<CallbackUrl>;
};

export type CallbackUrl = {
  __typename?: 'CallbackUrl';
  methods: Array<Method>;
  namespace: Array<Scalars['String']>;
  parent: Callback;
  url: Scalars['String'];
};

export type HttpContent = {
  __typename?: 'HttpContent';
  description?: Maybe<Scalars['String']>;
  example?: Maybe<Scalars['String']>;
  mimetype: Scalars['String'];
  parent: HttpContentParent;
  schema: Scalars['String'];
};

export type HttpContentParent = Method | Response;

export type HttpHeader = {
  __typename?: 'HttpHeader';
  description?: Maybe<Scalars['String']>;
  example?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parent: Response;
  schema: Scalars['String'];
};

export type Method = {
  __typename?: 'Method';
  callbacks: Array<Callback>;
  description?: Maybe<Scalars['String']>;
  method: ApiMethods;
  operationId: Scalars['String'];
  parameters: Array<Parameter>;
  parent: ApiMethodParent;
  requestBody: Array<HttpContent>;
  responses: Array<Response>;
  summary?: Maybe<Scalars['String']>;
};

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

export type Parameter = {
  __typename?: 'Parameter';
  /** the example for the object serialized as string */
  example?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  namespace: Array<Scalars['String']>;
  paramIn: ParameterIn;
  parent: ParameterParent;
  required: Scalars['Boolean'];
  schema: Scalars['String'];
};

export enum ParameterIn {
  Header = 'Header',
  Path = 'Path',
  Query = 'Query',
}

export type ParameterParent = Method | Path;

export type Path = {
  __typename?: 'Path';
  description?: Maybe<Scalars['String']>;
  methods: Array<Method>;
  parameters: Array<Parameter>;
  parent: ApiSpec;
  path: Scalars['String'];
  summary?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getApiSpec: ApiSpec;
  getApiSpecs: Array<ApiSpec>;
  getNotifications: Array<Notification>;
};

export type QueryGetApiSpecArgs = {
  id: Scalars['String'];
};

export type Response = {
  __typename?: 'Response';
  code: Scalars['Int'];
  contents: Array<HttpContent>;
  description?: Maybe<Scalars['String']>;
  headers: Array<HttpHeader>;
  parent: Method;
  summary?: Maybe<Scalars['String']>;
};

export type Server = {
  __typename?: 'Server';
  description?: Maybe<Scalars['String']>;
  namespace: Array<Scalars['String']>;
  parent: ApiSpec;
  url: Scalars['String'];
  variables: Array<Variable>;
};

export type Subscription = {
  __typename?: 'Subscription';
  notificationChanges: Notification;
};

export type Variable = {
  __typename?: 'Variable';
  default: Array<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  enum?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  namespace: Array<Scalars['String']>;
  parent: Server;
};

export type GetApiSpecsQueryVariables = Exact<{ [key: string]: never }>;

export type GetApiSpecsQuery = {
  __typename?: 'Query';
  getApiSpecs: Array<{
    __typename?: 'ApiSpec';
    id: string;
    name: string;
    servers: Array<{ __typename?: 'Server'; url: string; description?: string | null }>;
    paths: Array<{
      __typename?: 'Path';
      path: string;
      description?: string | null;
      parameters: Array<{ __typename?: 'Parameter'; name: string; example?: string | null }>;
      methods: Array<{
        __typename?: 'Method';
        method: ApiMethods;
        operationId: string;
        parameters: Array<{ __typename?: 'Parameter'; name: string; example?: string | null; namespace: Array<string>; paramIn: ParameterIn }>;
        responses: Array<{
          __typename?: 'Response';
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

export type NotificationsSubscription = { __typename?: 'Subscription'; notificationChanges: { __typename?: 'Notification'; event: NotificationEvent } };

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
    notificationChanges {
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
