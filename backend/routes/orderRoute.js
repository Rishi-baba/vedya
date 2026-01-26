import express from 'express'
import {allOrders, updateStatus, placeOrder, placeOrderStripe, placeOrderRazorpay, userOrders, verifyStripe } from '../controllers/orderController.js'
import authUser from '../middleware/auth.js';
import adminAuth from '../middleware/adminAuth.js';

const orderRouter = express.Router()   

// Admin Features
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

// Payment Features
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('/razorpay', authUser, placeOrderRazorpay)

//  User Features
orderRouter.post('/userOrders', authUser, userOrders)

// Verify stripe
orderRouter.post('/verifyStripe', authUser, verifyStripe)

export default orderRouter 