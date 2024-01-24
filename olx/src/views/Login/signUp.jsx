import "./index.css"
import { useNavigate } from 'react-router-dom'
import { signUp} from "../../config/firebase"
import { useState } from "react"

function SignUp() {
    const navigate = useNavigate()
    const [fullName , setfullName] =useState('')
    const [email , setEmail] =useState()
    const [Password , setPassword] =useState()
    const SIGNUP = async()=>{
        try {
            await signUp({fullName, email, Password})
            navigate('/login')
        } catch(e){
            alert(e.message)
        }
    }

    return <div className="background">
        <div className="backGround">
            <div className='mainCont'>
                <div onClick={()=>{navigate("/")}} className="deleteIcon"><i className="fa-solid fa-xmark"></i></div>
                <div className="content">
                    <div className="logo">
                        <img className="LoginImg" src="src/views/NavBar/brandIconLogin_noinline.93e8a1a9cf50902ba5250814f57810ff.svg" />
                        <br />
                        <h4>Welcome to OLX</h4>
                        <span>The trusted community of buyers and sellers.</span>
                    </div>
                    <br />
                    <div className="form">
                        <input onChange={(e)=>setfullName(e.target.value)} type="text" placeholder="Enter Full Name" />
                        <input onChange={(e)=>setEmail(e.target.value)} type="Email" placeholder="Enter Email" />
                        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password" />
                        <button onClick={SIGNUP} className="btn btn-primary">Sign Up</button>
                        <span onClick={() => navigate("/login")}>
                            Already Have an account
                        
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default SignUp