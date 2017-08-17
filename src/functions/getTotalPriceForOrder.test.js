/* global describe, expect, it */
import DATA from '../DATA'
import getProductsForOrder from './getProductsForOrder'

describe('getProductsForOrder', () => {
  it(
    'is a function',
    () =>
      expect(typeof getProductsForOrder).toBe('function')
  )
})
