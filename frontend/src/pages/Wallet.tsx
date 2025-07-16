import axios from "axios"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

const apiUrl = import.meta.env.VITE_API_URL;

function Wallet() {
  const navigate = useNavigate()
  const [success,setsuccess] = useState()
  const [error, setError] = useState()
  const phoneRef = useRef<HTMLInputElement>(null)
  const amountRef = useRef<HTMLInputElement>(null)

 async  function walletAmount(){

    const phoneNo = phoneRef.current?.value
    const amount = Number(amountRef.current?.value)


try {
  
      const token = localStorage.getItem("token")

     const res = await  axios.post(`${apiUrl}/api/v1/wallet`,{
      phoneNo,
      amount
  },{
    headers:{
      token
    }
  })

  setsuccess(res.data.message)

//   console.log("Phone ref:", phoneRef.current);
// console.log("Amount ref:", amountRef.current);

 // Clear inputs after successful submission
      if (phoneRef.current) phoneRef.current.value = "";
      if (amountRef.current) amountRef.current.value = "";

      setTimeout(() => {
      navigate("/profile")
      },3000)

setError(undefined);

} catch (error) {
  
     if (axios.isAxiosError(error)) {
        setError( error.response?.data.message );

         if (phoneRef.current) phoneRef.current.value = "";
      if (amountRef.current) amountRef.current.value = "";

      } 
      
}

  }


  return (
    <div className="p-10 flex justify-center">
       
       <div className="border-2 p-8 rounded-lg bg-white mt-10">

        <h1 className="text-2xl font-semibold text-blue-500 ">Enter your wallet information</h1>

        {error && <div className="mb-2 mt-2 p-2 bg-red-100 text-red-700 rounded-md text-sm">{error}</div>}

        {success && <div className="mb-2 mt-2 p-2 bg-green-100 text-green-700 rounded-md text-sm">{success}</div>}

        <div className="flex flex-col gap-5 pt-5 pb-10">

<div className="flex flex-col gap-2">
<label htmlFor="phone"
className="text-black">Phone Number</label>

<input 
ref={phoneRef}
id="phone" className="border-2 py-1 pl-3 rounded-md border-black text-black focus:border-2 focus:border-black focus:outline-none" type="text" placeholder="91XXXXXXXXXX" />
</div>


<div className="flex flex-col gap-2">

<label htmlFor="amount"
className="text-black">Amount</label>

<input 
ref={amountRef}
id="amount"
className="border-2 py-1 pl-3 rounded-md border-black text-black focus:border-2 focus:border-black focus:outline-none" type="text" placeholder="Amount" />

</div>


<button 
type="button"
onClick={walletAmount}
className="text-white bg-blue-500 py-2 rounded-lg mt-2 font-semibold">Add Information</button>

        </div>
       </div>
      
    </div>
  )
}

export default Wallet
