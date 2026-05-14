import Select from 'react-select'
import { products } from '../../utils/products'

const options = [
  { value: 'sofa', label: 'Sofa' },
  { value: 'chair', label: 'Chair' },
  { value: 'watch', label: 'Watch' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'wireless', label: 'Wireless' },
]

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#0f3460',
    color: 'white',
    borderRadius: '5px',
    border: 'none',
    boxShadow: 'none',
    width: '200px',
    height: '40px',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#0f3460' : 'white',
    color: state.isSelected ? 'white' : '#0f3460',
    '&:hover': { backgroundColor: '#0f3460', color: 'white' },
  }),
  singleValue: (provided) => ({ ...provided, color: 'white' }),
}

export default function FilterSelect({ setFilterList }) {
  const handleChange = (selected) => {
    setFilterList(products.filter((item) => item.category === selected.value))
  }

  return (
    <Select
      options={options}
      defaultValue={{ value: '', label: 'Filter By Category' }}
      styles={customStyles}
      onChange={handleChange}
    />
  )
}
