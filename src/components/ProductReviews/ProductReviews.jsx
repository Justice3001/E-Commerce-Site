import { useState } from 'react'
import { Container } from 'react-bootstrap'
import './product-review.css'

export default function ProductReviews({ selectedProduct }) {
  const [tab, setTab] = useState('desc')

  return (
    <section className="product-reviews">
      <Container>
        <ul>
          <li
            style={{ color: tab === 'desc' ? '#0f3460' : '#9c9b9b', fontWeight: tab === 'desc' ? 700 : 400 }}
            onClick={() => setTab('desc')}
          >
            Description
          </li>
          <li
            style={{ color: tab === 'rev' ? '#0f3460' : '#9c9b9b', fontWeight: tab === 'rev' ? 700 : 400 }}
            onClick={() => setTab('rev')}
          >
            Reviews ({selectedProduct?.reviews?.length || 0})
          </li>
        </ul>
        {tab === 'desc' ? (
          <p>{selectedProduct?.description}</p>
        ) : (
          <div className="rates">
            {selectedProduct?.reviews?.map((rate, i) => (
              <div className="rate-comment" key={i}>
                <span>John Doe</span>
                <span>{rate.rating} / 5</span>
                <p>{rate.text}</p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
