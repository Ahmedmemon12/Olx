import "./index.css"
import Swal from "sweetalert2"
import { useNavigate } from 'react-router-dom'
import { login } from "../../config/firebase"
import { useState } from "react"

function LogIn() {
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const signin = async () => {
        try{
            await login({email, password})
            navigate('/')
        } catch (e) {
            const error = e.message
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: error,
              })
        }
    }

    return <div className="background">
        <div className="backGround">
            <div className='mainCont'>
                <div onClick={() => { navigate("/") }} className="deleteIcon"><i className="fa-solid fa-xmark"></i></div>
                <div className="content">
                    <div className="logo">
                        <img className="LoginImg" src="/olx logo big.svg" />
                        <br />
                        <h4>Welcome to OLX</h4>
                        <span>The trusted community of buyers and sellers.</span>
                    </div>
                    <br />
                    <div className="form">
                        <input onChange={(e)=>{setEmail(e.target.value)}} type="Email" placeholder="Enter Email" />
                        <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Enter Password" />
                        <button onClick={signin} className="btn btn-primary">Login</button>
                        <span onClick={() => navigate("/signup")}>
                            don't have an account

                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default LogIn