import  Users  from "../components/Users"
import Balance from "../components/Balance"

function Dashboard() {
  return (
    <div className="w-full p-5">

      <h1 className="my-5 text-center text-5xl font-bold italic border-t-2 border-b-2  py-3 border-blue-500">
        Dashboard
      </h1>

      <div>

<Balance/>

<Users/>

      </div>
      
    </div>
  )
}

export default Dashboard
