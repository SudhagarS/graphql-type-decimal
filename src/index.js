import { GraphQLScalarType } from 'graphql'
import { Kind } from 'graphql/language'
import BigNumber from 'bignumber.js'
BigNumber.config({ DECIMAL_PLACES: 2 })

export default new GraphQLScalarType({
  name: 'Decimal',
  description: 'The `Decimal` scalar type to represent currency values',

  serialize(value) {
    // value sent to the client
    return new BigNumber(value).toPrecision(2)
  },

  parseValue(value) {
    // value from the client
    if (isNaN(new BigNumber(value))) {
      throw new TypeError(
        `${String(value)} is not a valid decimal value.`
      )
    }

    return BigNumber(value)
  },

  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING) {
      throw new TypeError(
        `${String(ast.value)} is not a valid decimal value.`
      )
    }

    return BigNumber(ast.value)
  },
})
