import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import {useDispatch} from "react-redux"
import { register } from "../features/authSlice"

function Register() {

    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleChange = (e) =>{
        setInputs((prevState) =>({
            ...prevState,
            [e.target.name]: e.target.value
        })) 
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async(e) =>{
        e.preventDefault()

        const data = await dispatch(register(inputs))
        console.log(data)

        if(data.payload && "token" in data.payload){
            window.localStorage.setItem("token", data.payload.token)
        }

        navigate("/")
    }

    return (
        <div className="container-lg my-5">
            <div className="text-center align-items-center align-content-center">
                <div className="d-flex justify-content-center">
                    <form className="border p-5" onSubmit={handleSubmit}>
                        <h4 className="text-secondary fw-bold fs-3 mb-5">Register</h4>

                        <div className="mb-3">
                            <input type="text" placeholder="Username" className="form-control" name="username" required value={inputs.username} onChange={handleChange}/>
                        </div>

                        <div className="mb-3">
                            <input type="email" placeholder="Email Address" className="form-control" name="email" required value={inputs.email} onChange={handleChange}/>
                        </div>

                        <div className="mb-3">
                            <input type="password" placeholder="Password" className="form-control" name="password" required value={inputs.password} onChange={handleChange}/>
                        </div>

                        <div className="mb-4">
                            <p>Already a Member? <Link to="/login">Sign In</Link></p>
                        </div>

                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register