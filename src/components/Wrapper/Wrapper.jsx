import './style.css'
import { Col, Container, Row } from 'react-bootstrap'

const services = [
  { icon: <ion-icon name="car" />, title: 'Free Shipping', subtitle: 'Lorem ipsum dolor sit amet.', bg: '#fdefe6' },
  { icon: <ion-icon name="card" />, title: 'Safe Payment', subtitle: 'Lorem ipsum dolor sit amet.', bg: '#ceebe9' },
  { icon: <ion-icon name="shield-half-outline" />, title: 'Secure Payment', subtitle: 'Lorem ipsum dolor sit amet.', bg: '#e2f2b2' },
  { icon: <ion-icon name="headset" />, title: 'Back Guarantee', subtitle: 'Lorem ipsum dolor sit amet.', bg: '#d6e5fb' },
]

export default function Wrapper() {
  return (
    <section className="wrapper background">
      <Container>
        <Row>
          {services.map((s, i) => (
            <Col md={3} sm={5} xs={9} style={{ backgroundColor: s.bg }} className="feature" key={i}>
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.subtitle}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
