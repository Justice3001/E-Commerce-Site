import { useState } from 'react'
import './searchbar.css'
import { products } from '../../utils/products'

export default function SearchBar({ setFilterList }) {
  const [searchWord, setSearchWord] = useState('')

  const handleChange = (e) => {
    const value = e.target.value
    setSearchWord(value)
    setFilterList(products.filter((item) => item.productName?.toLowerCase().includes(value.toLowerCase())))
  }

  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." value={searchWord} onChange={handleChange} />
      <ion-icon name="search-outline" className="search-icon" />
    </div>
  )
}
