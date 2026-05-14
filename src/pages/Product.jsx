import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { products } from '../utils/products'
import Banner from '../components/Banner/Banner'
import ShopList from '../components/ShopList/ShopList'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import ProductReviews from '../components/ProductReviews/ProductReviews'
import useWindowScrollToTop from '../hooks/useWindowScrollToTop'

export default function Product() {
  const { id } = useParams()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
    const product = products.find((item) => parseInt(item.id) === parseInt(id)) || null
    setSelectedProduct(product)
    if (product) {
      setRelatedProducts(products.filter((item) => item.category === product.category && item.id !== product.id))
    }
  }, [id])

  useWindowScrollToTop()

  if (!selectedProduct) return <h1 className="text-center mt-5">Product not found</h1>

  return (
    <>
      <Banner title={selectedProduct.productName} />
      <ProductDetails selectedProduct={selectedProduct} />
      <ProductReviews selectedProduct={selectedProduct} />
      <section className="related-products">
        <Container>
          <h3>You might also like</h3>
        </Container>
        <ShopList productItems={relatedProducts} />
      </section>
    </>
  )
}
