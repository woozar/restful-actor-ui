import { gql } from 'apollo-angular';

export const getApiSpecs = gql`
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
          }
        }
      }
    }
  }
`;
