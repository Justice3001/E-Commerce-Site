import './banner.css'
import productBg from '../../assets/table.jpg'
import { Col, Container, Row } from 'react-bootstrap'

export default function Banner({ title }) {
  return (
    <div className="image-container">
      <img src={productBg} alt="" />
      <div className="overlay">
        <Container>
          <Row>
            <Col>
              <h2>{title}</h2>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
