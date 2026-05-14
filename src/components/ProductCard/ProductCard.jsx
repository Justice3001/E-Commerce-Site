import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { addToCart } from '../../app/features/cart/cartSlice'
import { useNavigate } from 'react-router-dom'
import './product-card.css'

export default function ProductCard({ title, productItem }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <Col md={3} sm={5} xs={10} className="product mtop">
      {title === 'Big Discount' || title === 'Deals' ? (
        <span className="discount">{productItem.discount}% Off</span>
      ) : null}
      <img loading="lazy" onClick={() => navigate(`/shop/${productItem.id}`)} src={productItem.imgUrl} alt={productItem.productName} />
      <div className="product-like">
        <ion-icon name="heart-outline" />
      </div>
      <div className="product-details">
        <h3 onClick={() => navigate(`/shop/${productItem.id}`)}>{productItem.productName}</h3>
        <div className="rate">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </div>
        <div className="price">
          <h4>${productItem.price}</h4>
          <button aria-label="Add to cart" type="submit" className="add" onClick={() => {
            dispatch(addToCart({ product: productItem, num: 1 }))
            toast.success('Added to cart!')
          }}>
            <ion-icon name="add" />
          </button>
        </div>
      </div>
    </Col>
  )
}
