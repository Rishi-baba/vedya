import  { useState } from 'react'
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Order from './pages/Order'
import Login from './components/Login'



const App = () => {

  const [token,setToken] = useState('');

  return (
    <div className='bg-gray-50 min-h-screen'>
      {token === "" ? <Login></Login>: 
              <>
      <NavBar></NavBar>
      <hr />
      <div className='flex w-full'>
        <Sidebar></Sidebar>
        <div className='w-[70] mx-auto ml-[max(5vw,25px0] my-8 text-gray-600 text-base'>
          <Routes>
            <Route path='/add' element={<Add></Add>}></Route>
            <Route path='/list' element={<List></List>}></Route>
            <Route path='/orders' element={<Order></Order>}></Route>
          </Routes>
        </div>
      </div>
      </>
      }

    </div>
  )
}

export default App