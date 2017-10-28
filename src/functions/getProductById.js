// test //

const getProductById = (DATA, id) => {
  if (DATA == null || DATA.products == null || id == null) {
    return null
  }
  let product
  DATA.products.forEach((p) => {
    if (p.id === id) {
      product = p.name
    }
  })
  return product
}

export default getProductById
