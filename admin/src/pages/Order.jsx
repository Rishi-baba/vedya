import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { Package } from "lucide-react";

const Order = ({token}) => {

  const [orders,setOrders] = useState([])
  
  const fetchOrders = async () => {

    if(!token) return null;
    try {
      
      const response = await axios.post(backendUrl + '/api/order/list', {}, {headers:{token}})
      console.log(response.data);
      
      if(response.data.success){
        setOrders(response.data.orders)
      }else{
        toast.error(response.data.message)
      }
      

    } catch (error) {
      toast.error(error.message)
    }
  }

  const statusHandle = async (event, orderId) => {
     try {
      
      const response = await axios.post(backendUrl + '/api/order/status', {orderId, status:event.target.value}, {headers:{token}})
      if(response.data.success){
        
        fetchOrders()
      }

     } catch (error) {
      toast.error(error.message)
     }
  }

  useEffect(() => {
    fetchOrders()
  }, [token])

  return (
    <div className="p-6">
      <h2 className="text-lg font-medium mb-4">Order Page</h2>

      {orders.map((order) => (
        <div
          key={order._id}
          className="border border-gray-300 p-6 mb-4 flex justify-between items-start"
        >
          {/* COLUMN 1 – ICON */}
          <div className="border p-3 h-fit">
            <Package size={28} />
          </div>

          {/* COLUMN 2 – PRODUCT + ADDRESS */}
          <div className="flex-1 ml-6 space-y-2">
            <p className="font-medium text-[15px]">
              {order.items[0]?.name} x {order.items[0]?.size}
            </p>

            <p className="font-semibold">
              {order.address.firstName} {order.address.lastName}
            </p>

            <p className="text-sm text-gray-600 leading-6">
              {order.address.street}, <br />
              {order.address.city}, {order.address.state},{" "}
              {order.address.pincode}
            </p>
          </div>

          {/* COLUMN 3 – ORDER INFO */}
          <div className="w-[200px] text-sm space-y-1">
            <p>
              <span className="font-medium">Items :</span>{" "}
              {order.items.length}
            </p>
            <p>
              <span className="font-medium">Method :</span>{" "}
              {order.paymentMethod}
            </p>
            <p>
              <span className="font-medium">Payment :</span>{" "}
              {order.payment ? "Paid" : "Pending"}
            </p>
            <p>
              <span className="font-medium">Date :</span>{" "}
              {new Date(order.date).toLocaleDateString()}
            </p>
          </div>

          {/* COLUMN 4 – AMOUNT + STATUS */}
          <div className="w-[160px] text-right space-y-3">
            <p className="text-lg font-medium">${order.amount}</p>

            <select
              onChange={(e) => statusHandle(e, order._id)}
              className="border px-4 py-2 rounded-md text-sm"
              value={order.status}
            > 
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Order