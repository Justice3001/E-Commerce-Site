import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decreaseQty, deleteProduct } from '../app/features/cart/cartSlice'
import useWindowScrollToTop from '../hooks/useWindowScrollToTop'

export default function Cart() {
  const { cartList } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const totalPrice = cartList.reduce((sum, item) => sum + item.qty * item.price, 0)
  useWindowScrollToTop()

  return (
    <section className="cart-items">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            {cartList.length === 0 && <h1 className="no-items product">Your cart is empty</h1>}
            {cartList.map((item) => {
              const lineTotal = item.price * item.qty
              return (
                <div className="cart-list" key={item.id}>
                  <Row>
                    <Col className="image-holder" sm={4} md={3}>
                      <img src={item.imgUrl} alt={item.productName} />
                    </Col>
                    <Col sm={8} md={9}>
                      <Row className="cart-content justify-content-center">
                        <Col xs={12} sm={9} className="cart-details">
                          <h3>{item.productName}</h3>
                          <h4>
                            ${item.price}.00 &times; {item.qty}
                            <span>${lineTotal}.00</span>
                          </h4>
                        </Col>
                        <Col xs={12} sm={3} className="cartControl">
                          <button className="incCart" onClick={() => dispatch(addToCart({ product: item, num: 1 }))}>
                            <i className="fa-solid fa-plus" />
                          </button>
                          <button className="desCart" onClick={() => dispatch(decreaseQty(item))}>
                            <i className="fa-solid fa-minus" />
                          </button>
                        </Col>
                      </Row>
                    </Col>
                    <button className="delete" onClick={() => dispatch(deleteProduct(item))}>
                      <ion-icon name="close" />
                    </button>
                  </Row>
                </div>
              )
            })}
          </Col>
          <Col md={4}>
            <div className="cart-total">
              <h2>Cart Summary</h2>
              <div className="d_flex">
                <h4>Total Price :</h4>
                <h3>${totalPrice}.00</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
