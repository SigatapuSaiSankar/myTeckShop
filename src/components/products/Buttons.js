import React, { useContext, useEffect } from 'react'
import { userContext } from '../../context/AppContext'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import "./Buttons.css"

export default function Buttons({product}) {
    const {cartItems,setCartItems} = useContext(userContext);
    const incrementQty  = (product)=>{
        setCartItems((prevCartItems)=>{
            let newCart = {...prevCartItems};
            newCart[product.id].quantity +=1;
            return newCart;
        });
    }
    const decrementQty = (product) => {
        setCartItems((prevCartItems)=>{
            let newCart = {...prevCartItems};
            if(newCart[product.id].quantity>1){
                newCart[product.id].quantity -=1;
            }
            else{
                delete newCart[product.id];
            }
            return newCart;
        });
    }
    return (
        <div className='ProductIncDec'>
            <button onClick={()=>decrementQty(product)} className='changeQty'><FaMinus /></button>
            <span>{cartItems[product.id].quantity}</span>
            <button onClick={()=>incrementQty(product)} className='changeQty'><FaPlus /></button>
        </div>
    )
}
