import React, { useContext } from 'react'
import { IoIosTrash } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { userContext } from '../../context/AppContext';

export default function CartItem({ item }) {  
    const {cartItems,setCartItems} = useContext(userContext);
    const IncrementQty = (item)=>{
        setCartItems((prevCartItems)=>{
            // let newCart = prevCartItems // it doesnt work because newcartitem will be the reference of old cart item
            let newCart = {...prevCartItems};//Cloning previous Cart
            newCart[item.id] = {...item,quantity:item.quantity+1}
            return newCart;
        })
    }

    const DecrementQty = (item)=>{
        setCartItems((prevCartItems)=>{
            let newCart = {...prevCartItems};
            if(item.quantity>1){
                newCart[item.id].quantity-=1;
            }
            else{
                delete newCart[item.id];
            }
            return newCart;
        })
    }

    const DeleteFromCart = (item)=>{
        setCartItems((prevCartItems)=>{
            let newCart = {...prevCartItems};
            delete newCart[item.id];
            return newCart;
        })
    }

    return (
        <div className="items">
            <div className='Cart-Img'>
            <img src={item.imageUrl} alt={item.title}/>
            </div>
            <div className="info">
                <div className="pinfo">
                    <h1 className="productName">{item.title} {item.description}</h1>
                    <button onClick={()=>DeleteFromCart(item)} className="fa-trash-can"><IoIosTrash /></button>
                </div>
                <p className="price">₹{item.price} <strike className="cutPrice">₹{item.cutPrice}</strike></p>
                <div className="modify">
                    <button className="decrement" onClick={()=>DecrementQty(item)}><FaMinus /></button>
                    <h4 className="quantity">{item.quantity}</h4>
                    <button className="increment" onClick={()=>IncrementQty(item)}><FaPlus /></button>
                </div>
            </div>
        </div>
    );
}
