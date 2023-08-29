import Navbar from "../components/Navbar"
import { NavLink } from "react-router-dom"

function notFound(){
    return <>
        <Navbar/>
        <h1>OOPs, Error 404, Page not found</h1>
        <NavLink to={'/'}>Go to dashboard</NavLink>
    </>
}

export default notFound