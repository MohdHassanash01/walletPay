import axios from "axios"
import { useEffect, useState } from "react"
const apiUrl = import.meta.env.VITE_API_URL;

interface UserDetails {
  email: string;
  firstName: string;
  lastName: string;
  Phone_no?: string;  // optional because it might be null
  balance?: number;   // optional because it might be null
}

export function Profile() {

  const [detail, setDetail] = useState({} as UserDetails)
    const [loading, setLoading] = useState(true);

  async function getUserDetail(){

    const token = localStorage.getItem("token")
  const res = await  axios.get(`${apiUrl}/api/v1/detail`,{
    headers:{
      token
    }
  })

  console.log(res.data);
  
setDetail(res.data)
setLoading(false)

  }

  useEffect(() => {

    getUserDetail()

  },[])

    if (loading) return <div className="pt-10 text-3xl text-blue-500 font-semibold pl-20">Loading...</div>;

  return (
    <div className="flex justify-center p-10">

      <div className="border-2 w-fit p-10 rounded-lg mt-20 flex flex-col items-center gap-10 border-blue-500">

        <div className="w-[150px] h-[150px] rounded-full border-4 border-blue-500 overflow-hidden">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlu7f9_MmSWQq06q_SUCRIx-0Cu0udlR-9hw&s" alt="" />
        </div>

<div className="flex gap-6">

  <div className="border-r-2 pr-2">

     <h3><span className="font-semibold text-blue-500">Email : </span> {detail.email}</h3>

   <h3><span className="font-semibold text-blue-500">First Name : </span>{detail.firstName}</h3>


   <h3><span className="font-semibold text-blue-500">Last Name : </span> {detail.lastName}</h3>

</div>

<div>
  <h3> <span className="font-semibold text-blue-500">Mobile No : </span> {detail.Phone_no ? detail.Phone_no :"null"}</h3>

<h3><span className="font-semibold text-blue-500">balance : </span> {detail.balance ? detail.balance :"null"}</h3>
</div>
</div>

      </div>
      
    </div>
  )
}

