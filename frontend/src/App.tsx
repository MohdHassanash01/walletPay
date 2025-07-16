import {BrowserRouter, Route, Routes, Navigate, Outlet, } from "react-router-dom"


import Dashboard from "./pages/Dashboard"
import {SendMoney} from "./pages/SendMoney"
import {Signin} from "./pages/Signin"
import {Home} from "./pages/Home"
import { Signup } from "./pages/Signup"
import { SideBar } from "./components/SideBar"
import { Navbar } from "./components/Navbar"
import  Wallet  from "./pages/Wallet"
import { Profile } from "./pages/Profile"
import Transaction from "./pages/Transaction"
import ProtectedRoute from "./components/ProtectedRoute"
function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>

     

<Route path="/signup" element={<Signup/>} />
<Route path="/signin" element={<Signin/>} />

 <Route path="/" element={<Layout/>}>

<Route path="/" element={<Home/>}/>

<Route path="/dashboard" element={<ProtectedRoute>
  <Dashboard/>
  </ProtectedRoute>} />

<Route path="/send" element={
  <ProtectedRoute>
  <SendMoney/>
</ProtectedRoute>} />

<Route path="/wallet" element={
  <ProtectedRoute>
    <Wallet/>
    </ProtectedRoute>} />


<Route path="/profile" element={<ProtectedRoute>
  <Profile/>
</ProtectedRoute>} />

<Route path="/transaction" element={<ProtectedRoute>
  <Transaction/>
</ProtectedRoute>} />


</Route>

 {/* Catch-all Route */}
<Route path="*" element={<Navigate to="/" replace />} />

    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App


function Layout(){
    return (
    <>
<div className="max-h-screen flex flex-col">
<Navbar/>

<div className='grid grid-cols-[auto_1fr]  overflow-auto flex-grow-1'>

<SideBar/>

<div className="w-full h-screen ">

{<Outlet/>}
</div>
</div>
</div>
     
</>


)
}



