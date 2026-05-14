import { Container, Row } from 'react-bootstrap'
import ProductCard from '../ProductCard/ProductCard'

export default function Section({ title, bgColor, productItems }) {
  return (
    <section style={{ background: bgColor }}>
      <Container>
        <div className="heading">
          <h1>{title}</h1>
        </div>
        <Row className="justify-content-center">
          {productItems.map((item) => (
            <ProductCard key={item.id} title={title} productItem={item} />
          ))}
        </Row>
      </Container>
    </section>
  )
}
