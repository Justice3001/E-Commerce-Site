import './slidercard.css'
import { Col, Container, Row } from 'react-bootstrap'

export default function SlideCard({ title, desc, cover }) {
  return (
    <Container className="box">
      <Row>
        <Col md={6}>
          <h1>{title}</h1>
          <p>{desc}</p>
          <button className="btn-primary">Visit Collections</button>
        </Col>
        <Col md={6}>
          <img src={cover} alt={title} />
        </Col>
      </Row>
    </Container>
  )
}
