import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify";

const apiUrl = import.meta.env.VITE_API_URL;

interface UserDetails {
  email: string;
  firstName: string;
  lastName: string;
  Phone_no?: string;  // optional because it might be null
  balance?: number;   // optional because it might be null
}

      const token = localStorage.getItem("token")

export function Profile() {

  const [detail, setDetail] = useState({} as UserDetails)

  // console.log(detail);
  

  
  const [loading, setLoading] = useState(true);


  async function getUserDetail(){

try {
  const {data} = await  axios.get(`${apiUrl}/api/v1/detail`,{
    headers:{
      token
    }
  })

  // console.log(data);
  

  if (data.success) {
    setDetail(data.userDetail)
   setLoading(false)
  }

} catch (error) {
   if (axios.isAxiosError(error)) {
    console.log(error.response?.data.message);
      } 
      
 }finally{
  setLoading(false)
 }}




async  function handleRemove(){
    try {
  const {data} = await  axios.delete(`${apiUrl}/api/v1/wallet/delete`,{
    headers:{
      token
    }
  })

  console.log(data);
  
if (data.success) {
      toast.success(data.message || "Wallet deleted successfully");
      // Reset state after wallet deletion
      setDetail((prev) => ({
        ...prev,
        balance: undefined,
        Phone_no: undefined,
      }));
    }

} catch (error) {

   if (axios.isAxiosError(error)) {

    console.log(error.response?.data.message);
    toast.error(error.response?.data.message)

      } 
      
 }
  }


  useEffect(() => {
    getUserDetail()
  },[])


    const profileFields = [
    {
      label: 'Email Address',
      value: detail.email,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.94a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      label: 'First Name',
      value: detail.firstName,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      label: 'Last Name',
      value: detail.lastName,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      label: 'Mobile Number',
      value: detail.Phone_no,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    }
  ];

    if (loading) return <div className="pt-10 text-3xl text-blue-500 font-semibold pl-20">Loading...</div>;

  return (
    <div className="flex justify-center p-10 ">

      <div className="border-1 w-full p-10 rounded-lg  flex flex-col items-center gap-10 bg-neutral-800 border-neutral-600 ">


         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
      <div className="space-y-4">
        {profileFields.map((field, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-soft border border-gray-100 hover:shadow-medium transition-shadow duration-200">
            <div className="flex items-center space-x-3 mb-2">
              <div className="text-blue-500">
                {field.icon}
              </div>
              <h3 className="text-sm font-semibold text-neutral-600 uppercase tracking-wide">
                {field.label}
              </h3>
            </div>
            <p className="text-gray-900 font-semibold text-lg">
                {field.value || "Not available"}

            </p>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-6 text-white shadow-medium">
          <div className="flex items-center space-x-3 mb-2">
       
            <h3 className="text-sm font-medium uppercase tracking-wide opacity-90">
              Account Balance
            </h3>
          </div>
          <p className="text-2xl font-bold mb-1">
              {detail.balance !== undefined ? `${detail.balance}` : "No wallet found"}
          </p>
          <p className="text-primary-100 text-sm">
            { detail.balance &&  "Available for transactions"}
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
   
   
            <button 
            onClick={handleRemove}
            className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-4 ">
            Remove Wallet
            </button>
          </div>
        </div>
      </div>
    </div>



      </div>

      
      
    </div>


  )
}

