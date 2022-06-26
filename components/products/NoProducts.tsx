import React from 'react'
import products from './products.module.scss'

const NoProducts = () => {
  return (
    <div className={products.productsContainer}>
      <h1>No Products 🤷‍♂️</h1>
    </div>
  )
}

export default NoProducts
