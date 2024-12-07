import React from 'react'

const ProductLayout = ({children}) => {
  return (
    <div>
      {children}
      <div>
        <h2>Featured product section</h2>
      </div>
    </div>
  )
}

export default ProductLayout