// import axios from "axios"
// import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"


// interface TransactionUser {
//   _id: string;
//   firstName: string;
//   lastName: string;
//   email: string;
// }

// interface TransactionData {
//   _id: string;
//   type: "credit" | "debit";
//   amount: {
//     $numberDecimal: string;
//   };
//   from?: TransactionUser;
//   to?: TransactionUser;
// }

// function Transaction() {
// const [data,setdata] = useState<TransactionData[]>([])

//     useEffect(() => {
      
//        async function getDetail(){

//     const token = localStorage.getItem("token")
    
//   const res = await  axios.post("http://localhost:3000/api/v1/transaction",
//     {},{
//         headers:{
//             token
//         }
//     })

//         console.log(res.data.data);
//         setdata(res.data.data)

//         }

//         getDetail()

//     },[])



//   return (
// <div>
    
//     <h1 className="py-5 text-center text-4xl font-semibold text-blue-500">Transactions Detial </h1>

//     {data.length > 0 ?     <div className="p-5 flex  justify-center">

// <div className=" p-5 rounded-lg flex flex-col  gap-10 ">
//     {data.map((data) => <List data={data}  />)}
// </div>

      
//     </div>: <div className="pl-20 pt-10 text-xl text-red-500">No transactions found.</div>}


    
// </div>
//   )
// }



// function List({ data }:{data:TransactionData}) {
//   const navigate = useNavigate();

//   const isCredit = data.type === "credit";
//   const user = isCredit ? data.from : data.to;

//   return (
//     <div className="flex justify-between gap-10 border-2 p-5 rounded-lg sm:flex-col md:flex-row">
//       <div>
//         Payment of <span className="bg-slate-800 px-2 rounded-md">₹ {data.amount.$numberDecimal}</span>
//       </div>

//       {user ? (
//         <div>
//           {isCredit ? "Received from" : "Sent to"} {user.firstName} {user.lastName}
//           <h1 className="text-gray-400">{user.email}</h1>
//         </div>
//       ) : (
//         <div>User not available</div>
//       )}

//       {!isCredit && user && (
//         <button
//           onClick={() => {
//             navigate(`/send?id=${user._id}&name=${user.firstName} ${user.lastName}`);
//           }}
//           className="h-10 px-3 bg-blue-500 rounded-lg font-semibold"
//         >
//           Send Again
//         </button>
//       )}
//     </div>
//   );
// }



// export default Transaction




import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;
interface TransactionUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface TransactionData {
  _id: string;
  type: "credit" | "debit";
  amount: {
    $numberDecimal: string;
  };
  from?: TransactionUser;
  to?: TransactionUser;
}

function Transaction() {
  const [data, setData] = useState<TransactionData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getDetail() {
      const token = localStorage.getItem("token");
      
      try {
        const res = await axios.post(
          `${apiUrl}/transaction`,
          {},
          {
            headers: {
              token,
            },
          }
        );
        setData(res.data.data);
      } catch (err) {
        setError("Failed to fetch transactions");
        console.error("Error fetching transactions:", err);
      } finally {
        setLoading(false);
      }
    }

    getDetail();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl">Loading transactions...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="py-5 text-center text-4xl font-semibold text-blue-500">
        Transactions Detail
      </h1>

      {data && data.length > 0 ? (
        <div className="p-5 flex justify-center">
          <div className="p-5 rounded-lg flex flex-col gap-10 w-full max-w-4xl">
            {data.map((transaction) => (
              <List key={transaction._id} data={transaction} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <div className="text-xl text-red-500">No transactions found.</div>
        </div>
      )}
    </div>
  );
}

function List({ data }: { data: TransactionData }) {
  const navigate = useNavigate();

  const isCredit = data.type === "credit";
  const user = isCredit ? data.from : data.to;
  const amount = parseFloat(data.amount.$numberDecimal).toFixed(2);

  return (
    <div className="flex justify-between gap-10 border-2 p-5 rounded-lg sm:flex-col md:flex-row items-center">
      <div className="text-lg">
        Payment of{" "}
        <span className={`px-2 rounded-md ${isCredit ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800 font-semibold"}`}>
          ₹ {amount}
        </span>
      </div>

      <div className="text-center">
        {user ? (
          <>
            {isCredit ? "Received from" : "Sent to"}{" "}
            <span className="font-semibold">
              {user.firstName} {user.lastName}
            </span>
            <div className="text-gray-400 text-sm">{user.email}</div>
          </>
        ) : (
          <div className="text-gray-500">User not available</div>
        )}
      </div>

      {!isCredit && user && (
        <button
          onClick={() => {
            navigate(
              `/send?id=${user._id}&name=${user.firstName} ${user.lastName}`
            );
          }}
          className="h-10 px-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          Send Again
        </button>
      )}
    </div>
  );
}

export default Transaction;