import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


function ProtectedRoute({children}) {

    const token = localStorage.getItem("token")
    const navigate = useNavigate()

 useEffect(() => {

    if (!token) {
        navigate("/signin")
    }

 },[token, navigate])
 
    if (!token) {
        return null
    }
    return children
}

export default ProtectedRoute
