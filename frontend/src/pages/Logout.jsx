import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserDispatchContext } from "../context/UserContext"

function Logout() {
  
    const setUserDetails = useContext(UserDispatchContext)
    const navigate = useNavigate()

    useEffect(() => {
        setUserDetails({})
        navigate('/login')
    }, [])

}

export default Logout