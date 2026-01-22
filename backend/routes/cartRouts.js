import express from 'express'
import { addToCart, getUserCart, UpdateCart } from '../controllers/cartController.js'

const cartRouter = express.Router()   

cartRouter.post('/add',authUser, addToCart)
cartRouter.post('/update',authUser, UpdateCart)
cartRouter.get('/get',authUser, getUserCart)

export default cartRouter