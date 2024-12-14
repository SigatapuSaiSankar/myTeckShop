import React, { useContext } from 'react'
import './Header.css'
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Product from '../products/Product';
import Cart from '../cart/Cart';
import Other from '../Other';
import { userContext } from '../../context/AppContext';
import ProductInfo from '../productInfo/ProductInfo';
import Login from '../login_signup/Login';
import { IoLogIn } from "react-icons/io5";
import SignUp from '../login_signup/SignUp';
import PreviousOrders from '../PreviousOrders/PreviousOrders';
import { LuPackageOpen } from "react-icons/lu";

export default function Header() {
    const {cartItems,setCartItems,user,setUser} = useContext(userContext);
    const path = "";
    const lengthOfCart = Object.keys(cartItems).length;//finding the length of cart(length of key pairs in cartItem)
    // const lengthOfCart = 0;
    // for(let val in cartItems){
    //     lengthOfCart++;
    // }

    function logout() {
        setUser({
            email:"",
            username:"",
            password:"",
            ordersummary:[],
            valid:false,
        })
    }
    return (
        <Router>
        <div className="header">

            <div className="name">
                <h1>Tech-Shop</h1>
            </div>

            <div>
                <h2 className='user'>{user.username}</h2>
            </div>

            <div className="icons">
            <Link to={`${path}/`}><div className='fa-solid'><FaSearch /></div></Link>
                <div className="sub">
                <Link to={`${path}/cart`}><div className='fa-solid'><FaCartShopping /><p>{lengthOfCart}</p></div></Link> 
                </div>

                {user.ordersummary.length!==0 && <Link to={`${path}/PrevOrders`}><div className='fa-solid'><LuPackageOpen /></div></Link>}

                {user.valid?
                <button onClick={logout} className='Logout'><div><IoLogIn size={30}/></div></button>
                :
                <Link to={`${path}/Login`}><div className='fa-solid'><FaUser /></div></Link>
                }
            </div>
        </div>
            <Routes>
                <Route path={`${path}/`} element={<Product/>}/>
                <Route path={`${path}/products`} element={<Product/>}/>
                <Route path={`${path}/product/:productId`} element={<ProductInfo/>}/>
                <Route path={`${path}/cart`} element={<Cart/>}/>
                <Route path={`${path}/Login`} element={<Login/>}/>
                <Route path={`${path}/SignUp`} element={<SignUp/>}/>
                <Route path={`${path}/PrevOrders`} element={<PreviousOrders />}/>
                <Route path='*' element={<Other/>}/>
            </Routes>
        </Router>
    )
}
