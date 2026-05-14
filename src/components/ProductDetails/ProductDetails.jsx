import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { addToCart } from '../../app/features/cart/cartSlice'
import './product-details.css'

export default function ProductDetails({ selectedProduct }) {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)

  const handleAdd = () => {
    dispatch(addToCart({ product: selectedProduct, num: quantity }))
    toast.success('Added to cart!')
  }

  return (
    <section className="product-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <img loading="lazy" src={selectedProduct?.imgUrl} alt={selectedProduct?.productName} />
          </Col>
          <Col md={6}>
            <h2>{selectedProduct?.productName}</h2>
            <div className="rate">
              <div className="stars">
                <i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" /><i className="fa fa-star" />
              </div>
              <span>{selectedProduct?.avgRating} ratings</span>
            </div>
            <div className="info">
              <span className="price">${selectedProduct?.price}</span>
              <span>Category: {selectedProduct?.category}</span>
            </div>
            <p>{selectedProduct?.shortDesc}</p>
            <input className="qty-input" type="number" placeholder="Qty" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} />
            <button aria-label="Add to cart" type="submit" className="add" onClick={handleAdd}>Add To Cart</button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
