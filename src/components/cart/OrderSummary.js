import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../context/AppContext';

export default function OrderSummary({ cartArray }) {
    const originalPrice = cartArray.reduce((acc, item) => acc + item.cutPrice * item.quantity, 0);
    const totalPrice = cartArray.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discount = originalPrice - totalPrice;

    const navigate = useNavigate();
    const {user,setUser,users,setUsers} = useContext(userContext);
    const path = "";

    const {setCartItems} = useContext(userContext);

    function loginToCheckOut(){
        navigate(`${path}/Login`);
    }

    function checkOut(){
        setUser((prevUserData) => {
            return {...prevUserData,ordersummary: [...prevUserData.ordersummary,cartArray]}
        })
        setUsers((prevUsersData) => {
            return prevUsersData.map((user) => {
                if (user.email === user.email) { // Match user by email or another unique identifier
                    return {
                        ...user,
                        ordersummary: [...user.ordersummary, cartArray],
                    };
                }
                return user; // Keep other users unchanged
            });
        });
        setCartItems([]);
    }

    return (
        <div className="rightSide">
            <h2 className="orderSummary">Order Summary ({cartArray.length} items)</h2>
            <div className="totalAmount">
                <ul className="titles">
                    <li className="title1">Original Price</li>
                    <li className="title2">Discount</li>
                    <li className="title3">Delivery</li>
                </ul>
                <ul className="amount">
                    <li className="amount1">₹{originalPrice}</li>
                    <li className="amount2">₹{discount}</li>
                    <li className="amount3">Free</li>
                </ul>
            </div>
            <div className="finalAmount">
                <ul className="totalPrice">
                    <li className="tot">Total Price</li>
                </ul>
                <ul className="ttAmount">
                    <li className="totAmount">₹{totalPrice}</li>
                </ul>
            </div>
            {!user.valid?<button className="checkOut" id="checkOut" onClick={loginToCheckOut}>Login to CheckOut</button>:<button className="checkOut" id="checkOut" onClick={checkOut}>Checkout</button>}
            
        </div>
    )
}
