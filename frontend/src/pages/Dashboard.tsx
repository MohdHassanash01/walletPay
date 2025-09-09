import  Users  from "../components/Users"
import Balance from "../components/Balance"

function Dashboard() {
  return (
    <div className="w-full p-5">


      <div>

<Balance/>

<Users/>

      </div>
      
    </div>
  )
}

export default Dashboard
