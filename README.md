# graphql-type-decimal

Decimal scalar type for [GraphQL.js](https://github.com/graphql/graphql-js) primarily for currencies.

Ex: `21.01`

## Usage

This package exports a Decimal scalar GraphQL.js type:

```js
import GraphQLDecimal from 'graphql-type-decimal';
```

### SDL with [GraphQL-tools](https://github.com/apollographql/graphql-tools)

When using the SDL with GraphQL-tools, define `GraphQLDecimal` as the resolver for the appropriate scalar type in your schema:

```js
import { makeExecutableSchema } from 'graphql-tools';
import GraphQLDecimal from 'graphql-type-decimal';

const typeDefs = `
scalar Decimal

type MyType {
  myField: Decimal
}

# ...
`;

const resolvers = {
  Decimal: GraphQLDecimal,
};

export default makeExecutableSchema({ typeDefs, resolvers });
```


## Dependency

This library uses [bigdecimal.js](https://github.com/MikeMcl/bignumber.js/)

## Related

This repository is inspired by [graphql-type-datetime](https://github.com/taion/graphql-type-json)
