import { Router } from 'express'
import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { param, validationResult } from 'express-validator'

const __dirname = dirname(fileURLToPath(import.meta.url))
const products = JSON.parse(readFileSync(join(__dirname, '../data/products.json'), 'utf-8'))

export const productsRouter = Router()

productsRouter.get('/', (req, res) => {
  const { category } = req.query
  let result = products
  if (category) {
    result = products.filter((p) => p.category.toLowerCase() === category.toLowerCase())
  }
  res.json(result)
})

productsRouter.get('/:id', param('id').notEmpty().trim(), (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: 'Invalid product ID' })
  }
  const product = products.find((p) => p.id === req.params.id)
  if (!product) return res.status(404).json({ error: 'Product not found' })
  res.json(product)
})
