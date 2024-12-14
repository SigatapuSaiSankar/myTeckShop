import React, { useContext, useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../context/AppContext';

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const {users,setUsers} = useContext(userContext);

    const navigate = useNavigate();

    const path = "";

    const handleSignup = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match!");
        } else {
            // console.log({ username, email, password });
            const RegisteringUser = {
                email:email,
                username:username[0].toUpperCase()+username.slice(1,username.length),
                password:password,
                ordersummary:[]
            }
            setUsers((prevUsers)=>{
                return [...prevUsers,RegisteringUser];
            });
            setUsername("");
            setPassword("");
            setConfirmPassword("");
            setEmail("");
            setErrorMessage("");
            navigate(`${path}/Login`);
            
            console.log(users);
        }
    };

    return (
        <div>
            <form className="mainSignup" onSubmit={handleSignup}>
                <div className="signUp">
                    <h1 className="signUpHeading">Signup</h1>
                    <h4 className="existingAccount">
                        Already have an account? <Link to={`${path}/Login`}>Login</Link>
                    </h4>
                    <h3 className="errorMessage">{errorMessage}</h3>
                    <input
                        type="text"
                        className="inputs"
                        placeholder="Set Username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        required
                    />
                    <input
                        type="email"
                        className="inputs"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                    <input
                        type="password"
                        className="inputs"
                        placeholder="Set Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        minLength={5}
                        required
                    />
                    <input
                        type="password"
                        className="inputs"
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        minLength={5}
                        required
                    />
                    <button className="signUpBtn">Signup</button>
                    <div className="seperating">
                        <hr className="separate" />
                        <p className="orLoginWith">or Signup with</p>
                        <hr className="separate" />
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
