import useWindowScrollToTop from '../hooks/useWindowScrollToTop'
import SliderHome from '../components/Slider/Slider'
import Wrapper from '../components/Wrapper/Wrapper'
import Section from '../components/Section/Section'
import { products } from '../utils/products'

const discountProducts = products.filter((p) => p.discount)
const newArrivals = products.filter((p) => p.category === 'mobile' || p.category === 'wireless')
const bestSales = products.filter((p) => p.category === 'sofa')

export default function Home() {
  useWindowScrollToTop()

  return (
    <>
      <SliderHome />
      <Wrapper />
      <Section title="Deals" bgColor="#f6f9fc" productItems={discountProducts} />
      <Section title="New Arrivals" bgColor="white" productItems={newArrivals} />
      <Section title="Best Sales" bgColor="#f6f9fc" productItems={bestSales} />
    </>
  )
}
