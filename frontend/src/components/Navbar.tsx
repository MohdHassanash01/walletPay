import { Menu, UserPen } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Navbar(){

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <>

<div className="w-full border-b-1  border-neutral-600 ">

    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-2 mx-4 items-center  ">

  <div className="flex gap-4 items-center flex-shrink-0 ">

      <button
  className="w-10 h-10  flex justify-center items-center rounded-full p-2.5 border-1 border-gray-400">
    <Menu/>
  </button>

    <Link to="/">
    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-blue-800 bg-clip-text text-transparent ">WalletPay</h3>
    </Link>
  </div>






  <div className="flex flex-shrink-0 md:gap-4 gap-2">

     <Link to="/profile" className="bg-gradient-to-r from-blue-400 to-blue-800 py-2 px-3 rounded-md">
     <span className="flex gap-3"><UserPen/>
      Profile</span></Link>

      {isLoggedIn ? <Link 
      onClick={() => {
        localStorage.removeItem("token")
      }}
      to="/" className="bg-gradient-to-r from-blue-400 to-blue-800 py-2 px-3 rounded-md">logout</Link>:

      <Link to="/signin" className="bg-gradient-to-r from-blue-400 to-blue-800 py-2 px-3 rounded-md">Sign In</Link>}

      

  </div>

    </div>

</div>


    </>
  )
}