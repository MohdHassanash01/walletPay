import { Menu, UserPen } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { UseLogin } from "../context/LoginContext";

export function Navbar(){

const navigate = useNavigate();

const { isLoggedIn, logout } = UseLogin();

  return (
    <>

<div className="w-full border-b-1  border-neutral-600 ">

    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-2 mx-4 items-center  ">

  <div className="flex gap-4 items-center flex-shrink-0 ">

      <button
  className="w-10 h-10  hidden lg:flex justify-center items-center rounded-full p-2.5 border-1 border-gray-400">
    <Menu/>
  </button>

    <Link to="/">
    <h3 className="lg:text-2xl font-bold bg-gradient-to-r from-blue-300 to-blue-800 bg-clip-text text-transparent sm:text-xl">WalletPay</h3>
    </Link>
  </div>






  <div className="flex flex-shrink-0 md:gap-4 gap-2">

     <Link to="/profile" className="bg-gradient-to-r from-blue-400 to-blue-800 py-2 px-3 rounded-md flex gap-2">
     
      <UserPen size={18}/>
      Profile</Link>

      {isLoggedIn ? 
      <Link 
      onClick={() => {
        logout()
        navigate("/")
      }}
      to="/" className="bg-gradient-to-r from-blue-400 to-blue-800 py-2 px-3 rounded-md">Logout</Link>:

      <Link to="/signin" className="bg-gradient-to-r from-blue-400 to-blue-800 flex justify-center items-center px-3 rounded-md text-sm">Sign In</Link>}

      

  </div>

    </div>

</div>


    </>
  )
}