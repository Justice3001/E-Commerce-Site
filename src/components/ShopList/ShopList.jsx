import { Row } from 'react-bootstrap'
import { memo } from 'react'
import ProductCard from '../ProductCard/ProductCard'

const ShopList = ({ productItems }) => {
  if (productItems.length === 0) {
    return <h1 className="not-found">Product Not Found</h1>
  }
  return (
    <Row className="justify-content-center">
      {productItems.map((item) => (
        <ProductCard key={item.id} productItem={item} />
      ))}
    </Row>
  )
}

export default memo(ShopList)
