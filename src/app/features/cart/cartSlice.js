import { createSlice } from '@reduxjs/toolkit'

const stored = localStorage.getItem('cartList')
const storedCartList = stored ? JSON.parse(stored) : []

const initialState = { cartList: storedCartList }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, num } = action.payload
      const existing = state.cartList.find((item) => item.id === product.id)
      if (existing) {
        state.cartList = state.cartList.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + num } : item
        )
      } else {
        state.cartList.push({ ...product, qty: num })
      }
    },
    decreaseQty: (state, action) => {
      const product = action.payload
      const existing = state.cartList.find((item) => item.id === product.id)
      if (!existing) return
      if (existing.qty === 1) {
        state.cartList = state.cartList.filter((item) => item.id !== product.id)
      } else {
        state.cartList = state.cartList.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        )
      }
    },
    deleteProduct: (state, action) => {
      state.cartList = state.cartList.filter((item) => item.id !== action.payload.id)
    },
  },
})

export const cartMiddleware = (store) => (next) => (action) => {
  const result = next(action)
  if (action.type?.startsWith('cart/')) {
    localStorage.setItem('cartList', JSON.stringify(store.getState().cart.cartList))
  }
  return result
}

export const { addToCart, decreaseQty, deleteProduct } = cartSlice.actions
export default cartSlice.reducer
