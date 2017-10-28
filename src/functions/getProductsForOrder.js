const getProductById = (data, productId) => {
  let productName
  data.products.forEach((product) => {
    if (product.id === productId) {
      productName = product.name
    }
  })
  return productName
}

const getOrderById = (data, orderId) => {
  let orderName
  data.orders.forEach((order) => {
    if (order.id === orderId) {
      orderName = order.name
    }
  })
  return orderName
}
const getProductsForOrder = (data, id) => {
  if (data == null || data.orders == null || id == null) {
    throw new Error('Missing data or id')
  }
  const productsOfOrderArray = []
  data.orders.forEach((currentOrder, id) => {
    if (currentOrder.id === id) {
      currentOrder.products.forEach((currentProductId, id) => {
        productsOfOrderArray.push({
          id: currentProductId,
          product: getProductById(currentProductId)
        })
      })
    }
  })
  if (productsOfOrderArray.length === 0) {
    return null
  }
  else {
    return productsOfOrderArray
  }
}

export default getProductsForOrder
