export default (data, id) => {
  if (!data) {
    throw new Error('getProductsForOrder(): data param is missing')
  }

  if (!data.orders) {
    throw new Error('getProductsForOrder(): data.orders is missing')
  }

  const order = data.orders.find(o => o.id === id)

  if (!order) {
    return null
  }

  return order.products.map(productId => data.products.find(p => p.id === productId))
}
