import '../assets/css/login.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

function Login(){
    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPasssword] = useState("")
    const [error,setError] = useState(true)

    function submitHandler( event ){
        event.preventDefault()
        if(email && password && password.length >= 8){
            navigate("/dashboard")
        }  
    }
    useEffect(()=>{
        if(email && password && password.length >=8){
            setError(false)
        }else{
            setError(true)
        }
    },[password,email])


    return <form className='login-form' onSubmit={submitHandler}>
        <div className='form-group'>
            <label>Email</label>
            <input type="text" placeholder="Enter your email" onChange={(event)=>setEmail(event.target.value)} value={email} />
        </div>
        <div className='form-group'>
            <label>Password</label>
            <input type="password" placeholder="Enter Your Password" onChange={(event)=>setPasssword(event.target.value)} value={password}/>
        </div>

        <button type='submit' disabled={error}>Login</button>
    </form>
}

export default Login