import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import { Navigate, Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Order from "./pages/Order";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";
export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');

  useEffect(()=>{
    localStorage.setItem('token',token)
  },[token])

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer></ToastContainer>
      {token === "" ? (
        <Login setToken={setToken}></Login>
      ) : (
        <>
          <NavBar setToken={setToken}></NavBar>
          <hr />
          <div className="flex w-full">
            <Sidebar></Sidebar>
            <div className="w-[70%] mx-auto ml-[max(5vw,25px0] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/" element={<Navigate to="/add" />} />
                <Route path="/add" element={<Add token={token}></Add>}></Route>
                <Route path="/list" element={<List token={token}></List>}></Route>
                <Route path="/orders" element={<Order token={token}></Order>}></Route>
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
