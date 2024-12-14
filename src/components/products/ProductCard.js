import React, { useContext, useEffect } from 'react'
import { IoIosStar } from "react-icons/io";
import './Product.css';
import { userContext } from '../../context/AppContext';
import Buttons from './Buttons';
import { Link, useNavigate} from 'react-router-dom';
import ProductInfo from '../productInfo/ProductInfo';

export default function ProductCard({product}) {
    const {cartItems,setCartItems} = useContext(userContext);
    const path = "";

    // useEffect(()=>{
    //     console.log(product)
    // },[])
    function addToCart(product) {
        setCartItems(()=>{
            let newCart = {...cartItems};
            if(newCart[product.id]){
                newCart[product.id].quantity +=1;
            }
            else{
                newCart[product.id] = {...product,quantity:1};
            }
            return newCart;
        })
    }

    return (
    <div className="card">
        <div className='cardInfo'><Link to={`${path}/product/${product.id}`}><img src={`${path}/${product.imageUrl}`} alt={product.title} /></Link></div>

        <div className="stars">
            {/* printing stars */}
            {Array.from({length:product.rating}).map((v,i)=> <div className="star"><IoIosStar /></div>)}
            {/* Dynamically creating array */}
        </div>
        <h1 className="productTitle">{product.title}</h1>
        <p className="productDesc">{product.description}</p>
        <hr />
        <p className="price">₹{product.price} <strike className="cutPrice">₹{product.cutPrice}</strike></p>
        {(cartItems[product.id])?<Buttons product={product}/>:<button className="shopNow" onClick={()=>addToCart(product)}>Add to cart</button>}
    </div>
    )
}
