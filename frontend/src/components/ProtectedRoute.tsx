import { useEffect, type ReactNode } from "react"
import { useNavigate } from "react-router-dom"

interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({children}:ProtectedRouteProps) {

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
