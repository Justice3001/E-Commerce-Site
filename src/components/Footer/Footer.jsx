import './style.css'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className="box">
            <div className="logo">
              <ion-icon name="bag" />
              <h1>Plushify</h1>
            </div>
            <p>Explore our curated collection of stylish clothes, elegant watches, and cutting-edge phones. Elevate your fashion and tech game with our diverse range.</p>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms &amp; Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>Track Your Order</li>
              <li>Corporate &amp; Bulk Purchasing</li>
              <li>Returns &amp; Refunds</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>456 Elm Avenue, New York, NY 19322</li>
              <li>Email: UserSupport@Plushify.com</li>
              <li>Phone: +1 (432) 677 1299</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
