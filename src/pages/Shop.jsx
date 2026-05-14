import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { products } from '../utils/products'
import FilterSelect from '../components/FilterSelect/FilterSelect'
import SearchBar from '../components/SearchBar/SearchBar'
import ShopList from '../components/ShopList/ShopList'
import Banner from '../components/Banner/Banner'
import useWindowScrollToTop from '../hooks/useWindowScrollToTop'

export default function Shop() {
  const [filterList, setFilterList] = useState(products.filter((p) => p.category === 'sofa'))
  useWindowScrollToTop()

  return (
    <>
      <Banner title="Products" />
      <section className="filter-bar">
        <Container className="filter-bar-contianer">
          <Row className="justify-content-center">
            <Col md={4}>
              <FilterSelect setFilterList={setFilterList} />
            </Col>
            <Col md={8}>
              <SearchBar setFilterList={setFilterList} />
            </Col>
          </Row>
        </Container>
        <Container>
          <ShopList productItems={filterList} />
        </Container>
      </section>
    </>
  )
}
