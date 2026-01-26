// import { currency } from "../../admin/src/App.jsx";  
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

// glober variable
const currency = "inr";
const deliveryCharge = 10; 


// gateway initialization
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// placing orders using Cod method
const placeOrder = async (req,res)=>{

  try {
    
    const {userId,items,amount,address} = req.body;
  
    const orderData = {
      userId,
      items, 
      amount,
      PaymentMethod: "COD",
      payment: false,
      date: Date.now(),
      address,
    }

    const newOrder = orderModel(orderData)
    await newOrder.save()

    await userModel.findByIdAndUpdate(userId,{cartData:{}})
    res.json({success:true,message:"Order placed"})

  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
  }
  

}



// placing orders using Stripe method
const placeOrderStripe = async (req,res)=>{
  try {
    const {userId,items,amount,address} = req.body;
    const {origin} = req.headers;
    const orderData = {
      userId,
      items, 
      amount,
      PaymentMethod: "Stripe",
      payment: false,
      date: Date.now(),
      address,
    }

    const newOrder = orderModel(orderData)
    await newOrder.save()
  
    const line_items = items.map((item)=>({
      price_data: {
        currency: currency,
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }))

    line_items.push({
      price_data: {
        currency: currency,
        product_data: {
          name: 'Delivery Charges',
        },
        unit_amount: deliveryCharge * 100,
      },
      quantity: 1,
    })
    
    const session = await stripe.checkout.sessions.create({
      success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
      line_items,
      mode: 'payment',
    })

    res.json({success:true,session_url:session.url})

  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
  }
}

// Verify stripe
const verifyStripe = async (req,res)=>{
 
  const {orderId,success} = req.body;
  
  try {
    if(success === 'true'){
      await orderModel.findByIdAndUpdate(orderId,{payment:true})
      await userModel.findByIdAndUpdate(userId,{cartData:{}})
      res.json({success:true,message:"Payment successful"})
    } else {
      await orderModel.findByIdAndDelete(orderId)
      res.json({success:false,message:"Payment failed, order cancelled"})
    }
  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
  }

}



// placing orders using Razorpay method
const placeOrderRazorpay = async (req,res)=>{

}


// All Orders data for Admin Panel 
const allOrders = async (req,res)=>{
  try {
    
    const orders = await orderModel.find({})
    res.json({success:true,orders}) 

  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
  }
}


// User Order Data For Frontend 
const userOrders = async (req,res)=>{

  try {
    
    const {userId} = req.body;

    const orders = await orderModel.find({userId})
    res.json({success:true,orders})

  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
  }

}


// update order status from admin panel 
const updateStatus = async (req,res)=>{

  try {
    const {orderId,status} = req.body;
    await orderModel.findByIdAndUpdate(orderId,{status})
    res.json({success:true,message:"Status updated"})
  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
  }

}

export {verifyStripe, placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus}