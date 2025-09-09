
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from "axios";

import {  X } from 'lucide-react';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';

const apiUrl = import.meta.env.VITE_API_URL;

export function SendMoney (){

    const [error, setError] = useState("")
    const [data, setData] = useState()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    

    const amountRef = useRef<HTMLInputElement>(null)

   async function sendMony(){

  try {
       const token = localStorage.getItem("token")

        const amount = amountRef.current?.value
        if (!amount || Number(amount) <= 0) {
  toast.error("Please enter a valid amount");
  return;
}

      const {data} =  await axios.post(`${apiUrl}/api/v1/transfer`,{
            amount, 
            to:id
        },{
         headers:{
           token
           }
        })

        console.log(data);

        if (data.success) {
           setError("")
        setData(data.message)

        toast.success(data.message)

         if (amountRef.current) amountRef.current.value = "";

        }

       


  } catch (error) {
      if (axios.isAxiosError(error)) {
        setError( error.response?.data.message );

      if (amountRef.current) amountRef.current.value = "";

      }
  }
      
    }

    return <div className="flex justify-center  ">
        <div className="h-full flex flex-col justify-center pt-20 ">
            <div
                className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg relative"
            >
                <div className="flex flex-col space-y-1.5 px-6">

<button 
onClick={() => {
navigate("/dashboard")
}}
className='text-black absolute right-2 top-2 rounded-full bg-gray-100 p-2 hover:bg-gray-200'><X/></button>

                <h2 className="text-3xl font-bold text-center text-black mt-4">Send Money</h2>
                </div>

{data && <div className="mb-2 mt-2 p-2 bg-green-100 text-green-700 rounded-md text-sm">{data}</div>}

{error && <div className="mb-2 mt-2 p-2 bg-red-100 text-red-700 rounded-md text-sm">{error}</div>}

                <div className="p-6">
                <div className="flex items-center space-x-4">

<div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center ">


<span className="text-2xl text-white">{name ?name[0].toUpperCase():"null"}</span>

</div>


<h3 className="text-2xl font-semibold text-black">{name}</h3>
</div>

  <div className="space-y-5">
    <div className="space-y-2">
    <label
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black"
                        htmlFor='amount'
                    >
                        Amount (in Rs)
                    </label>
                    <input
                    type="number"
                       ref={amountRef}
                        className="flex h-10 w-full rounded-md border-2 border-black border-input bg-background px-3 py-2 text-sm text-gray-900 font-semibold focus:border-2 focus:border-black focus:outline-none"
                        id="amount"
                        placeholder="Enter amount"
                    />
                    </div>
                    <button 
                    onClick={sendMony}
                  className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-blue-500 text-white">
                        Initiate Transfer
                    </button>
                </div>
                </div>

                
        </div>
      </div>
    </div>
}