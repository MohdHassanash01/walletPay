import axios from "axios"
import { useEffect, useState } from "react"

const apiUrl = import.meta.env.VITE_API_URL;

function Balance() {

 const [balance, setBalance] = useState<number | null>(null);

 const [error, setError] = useState()
 const [loading, setLoading] = useState(true)

      useEffect(() => {
    async function getBalance() {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(`${apiUrl}/balance`, {
          headers: {
            token,
          },
        });

        console.log(res.data);
        setBalance(res.data.balance);
        setLoading(false)
      } catch (error) {
        
           if (axios.isAxiosError(error)) {
        setError( error.response?.data.message );
      } 

       setLoading(false);
      }
    }

    getBalance(); 
  }, []);

  return (
  <div className="w-fit border rounded-md p-4">
    {loading ? (
      <p className="text-blue-500 font-medium">Loading balance...</p>
    ) : error ? (
      <p className="text-red-500 font-semibold">{error}</p>
    ) : (
      <h1 className="text-xl">Your Balance: ₹{balance}</h1>
    )}
  </div>
  )
}

export default Balance
