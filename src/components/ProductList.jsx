import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchProducts } from '../redux/services/productService'

function ProductList() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { products } = useSelector(state => state.product)
  console.log("product from store", products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return products.length === 0 ? (<div>Loading...</div>) : (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gap: 20
    }}>
      {
        products.map((product, index) => {
          const { id, description, image, title, price } = product
          return (
            <div onClick={() => navigate(`/${id}`)} key={index} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 10,
              border: '1px solid gray',
              borderRadius: 10,
              cursor: 'pointer',
              padding: 10
            }}>
              <img src={image} alt="" style={{
                width: 200,
                height: 200,
              }} />
              <h2>{title}</h2>
              <p>{price} $</p>
              <p>{description}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default ProductList