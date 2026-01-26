import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";



// placing orders using Cod method
const placeOrder = async (req,res)=>{

  try {
    
    const {userId,items,amount,address} = req.body;
  
    const orderData = new orderModel({
      userId,
      items, 
      amount,
      PaymentMethod: "COD",
      payment: false,
      date: Date.now(),
      address,
    })

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



}

 
// placing orders using Razorpay method
const placeOrderRazorpay = async (req,res)=>{

}


// All Orders data for Admin Panel 
const allOrders = async (req,res)=>{

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

}

export {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus}