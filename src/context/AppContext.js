import React, { createContext, useEffect, useState } from 'react';
import products from '../components/products/products.json';

export const userContext = createContext();
export default function AppContext(props) {
    const [cartItems,setCartItems]=useState({});

    const [users,setUsers] = useState(()=>{
        const storedUsers =localStorage.getItem('allUsers');
        return storedUsers? JSON.parse(storedUsers) : [{email:"demo@example.com",username:"Demo",password:"demo123",ordersummary:[]}];
    })
    // setting users to an demo data if users data doesnt exist in local storage
    // if existing in local storage getting the data and setting to users variable

    const [user,setUser] = useState(()=>{
        const storedUser =localStorage.getItem('currentUser');
        return storedUser?JSON.parse(storedUser) :         
        {
            email:"",
            username:"",
            password:"",
            ordersummary:[],
            valid:false,
        };
    }) 

    useEffect(()=>{
        localStorage.setItem('allUsers', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify(user));
    },[users,user])

    const val = {
        cartItems,
        setCartItems,
        products,
        users,
        setUsers,
        user,
        setUser,
    };
    return (
        <userContext.Provider value={val}>{props.children}</userContext.Provider>
    )
}
