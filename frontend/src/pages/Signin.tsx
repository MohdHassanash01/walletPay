/* eslint-disable react-hooks/exhaustive-deps */

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const apiUrl = import.meta.env.VITE_API_URL;

export function Signin(){

  const navigate = useNavigate()
  const emailRef = useRef<HTMLInputElement>(null)

  const passwordRef = useRef<HTMLInputElement>(null)


     const [error, setError] = useState(null)
      const [loading, setLoading] = useState(false);


      async function handleSignin(){

        const email = emailRef.current?.value
        const password = passwordRef.current?.value

        setLoading(true);

 try {
  
      const {data} = await   axios.post(`${apiUrl}/api/v1/signin`,{
            email,
            password
        })

        console.log(data);
        
        if (data.success) {
          localStorage.setItem("token",data.token)
           toast.success(data.message);
          navigate("/")
        }

 } catch (error) {

   if (axios.isAxiosError(error)) {

    console.log(error.response?.data.message);
    
        setError( error.response?.data.message );

      } 
      
 }finally{

  setLoading(false)

 }
   
      }

      
            // for navigate to home page
      const token = localStorage.getItem("token")
      console.log(token);
      
      useEffect(() => {
        if (token) navigate("/")
            },[navigate])


    return (
        <>

       <div className="flex flex-col justify-center sm:h-screen p-4">


      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">

        <div className="text-center mb-5 font-bold text-2xl bg-gradient-to-r from-blue-300 to-blue-800 bg-clip-text text-transparent">
         Sign In 
        </div>

        
        {error && (
          <div className="mb-2 p-2 bg-red-100 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        <form>
          <div  className="space-y-6">

            <div>
              <label  className="text-blue-500 text-sm font-medium mb-2 block">Email Id</label>
              <input 
              ref={emailRef}
              name="email" type="email"  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
            </div>


            <div>
              <label  className="text-sm font-medium mb-2 block text-blue-500">Password...</label>
              <input
              ref={passwordRef}
              name="password" type="password"  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter password" />
            </div>



            <div  className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox"  className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label   className="text-slate-600 ml-3 block text-sm">
                I accept the <a href="javascript:void(0);"  className="text-blue-600 font-medium hover:underline ml-1">Terms and Conditions</a>
              </label>
            </div>
          </div>



 
          <div  className="mt-12">
            <button 
            
            onClick={handleSignin}
            type="button"  className={`w-full py-3 px-4 text-sm tracking-wider font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer ${loading ? "opacity-70 cursor-not-allowed":"cursor-pointer"}`}>
             {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </div>


          <p  className="text-slate-600 text-sm mt-6 text-center">You don't have an account? <Link to="/signup"  className="text-blue-600 font-medium hover:underline ml-1">Signup here</Link></p>
        </form>

      </div>
    </div> 
       
        </>
    )
}