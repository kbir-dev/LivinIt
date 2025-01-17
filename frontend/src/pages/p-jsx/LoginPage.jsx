import {React,useContext,useState} from 'react'
import "../p-css/LoginPage.css"
import { Link,Navigate } from 'react-router-dom'
import axios from "axios"
import { UserContext } from '../../UserContext'

const LoginPage = () => {
    const [userInput, setUserInput] = useState({
        email: '',
        password: ''
    })
    const[redirect,setRedirect] = useState(false)
    const {setUser} = useContext(UserContext)

    async function loginUser(e) {
        e.preventDefault();
        // console.log('Email:', userInput.email, typeof(email.value)); // Should log a string
        // console.log('Password:', userInput.password , typeof(password.value)); // Should log a string

        try {
            console.log("I am here")
            const response = await axios.post("/login", userInput);
            console.log('Login successful:', response.data);
            setUser(response.data)
            setRedirect(true); // Redirect to home page upon successful login
          } catch (error) {
            console.error('Error during login:', error.message)
          }
    }

    if(redirect){
        return <Navigate to={"/"} />
    }


    return (
        <div className="container-fluid d-flex justify-content-center align-items-center mt-5">
            <div className="col-md-6 col-lg-3">
                <div className="card border-0 text-center">
                    <div className="card-body d-flex flex-column gap-3">
                        <h3 className="card-title text-center mb-2">Login</h3>
                        <form className='d-flex flex-column gap-4' onSubmit={loginUser}>
                            <input type="email" className="form-control rounded-pill" id="email" placeholder="Enter email"
                                value={userInput.email}
                                onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
                            />
                            <input type="password" className="form-control rounded-pill" id="password" placeholder="Password" value={userInput.password}
                                onChange={(e) => setUserInput({ ...userInput, password: e.target.value })} />
                            <button type="submit" className="btn root-bg-color btn-block text-white rounded-pill">Login</button>
                        </form>
                        <div>Don't have an account yet ? <Link to="/register" className='text-decor-none'>Register</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
