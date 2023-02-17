import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache, NormalizedCacheObject } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';

const uri = 'http://localhost/graphql';
export function createApollo(httpLink: HttpLink): ApolloClientOptions<NormalizedCacheObject> {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
