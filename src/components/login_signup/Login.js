import React, { useContext, useState } from 'react'
import './Login.css'
import { userContext } from '../../context/AppContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const path = "";
    const navigate = useNavigate();

    const { users, setUsers, user, setUser } = useContext(userContext);

    function verification(event) {
        event.preventDefault();// prevent the form to direct to other page
        // console.log(username + ": " + email + " " + password + " " + confirmPassword);
        let exist = users.find((userObj) => userObj.email === email && userObj.password === password);
        if (exist) {
            setUser(
                {
                    email: email,
                    username: exist.username,
                    password: password,
                    ordersummary: exist.ordersummary,
                    valid: true,
                }
            )

            navigate(`${path}/products`);
            setErrorMessage("");
            setEmail("");
            setPassword("");
        }
        else {
            setErrorMessage("Invalid username or password")
        }
        // console.log(exist)
    }
    return (
        <div>
            <form className="mainSignup" onSubmit={verification}>
                <div className="signUp">
                    <h1 className="signUpHeading">Login</h1>
                    <h4 className="existingAccount">
                        Don't have an account?<Link to={`${path}/SignUp`}>SignUp</Link>
                    </h4>
                    <h3 className='errorMessage'>{errorMessage}</h3>
                    <input type="email" className="inputs" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                    <input type="password" className="inputs" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} min={5} required />
                    <button className="signUpBtn">Login</button>
                    <div className="seperating">
                        <hr className="seperate" />
                        <p className="orLoginWith">or login with</p>
                        <hr className="seperate" />
                    </div>
                    <div className="otherOptions">
                        <button className="facebook">Facebook</button>
                        <button className="google">Google</button>
                        <button className="twitter">Twitter</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
