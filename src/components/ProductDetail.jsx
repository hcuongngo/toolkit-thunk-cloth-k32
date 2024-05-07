import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProduct } from '../redux/services/productService'

function ProductDetail() {
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      dispatch(fetchProduct(id))
    }
  }, [id])

  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail