import React from 'react'
import "./NavigateToProducts.css"
import { useNavigate } from 'react-router-dom'
import { ImArrowDown } from "react-icons/im";

export default function NavigateToProducts() {
    const path = "";
    const navigate = useNavigate();

    const moveToProducts = ()=>{
        navigate(`${path}/products`);
    }
    return (
        <div className='NavToPro'>
            <div className='NavToPro-Head'>Find Some Products</div>
            <div className='NavToPro-Info'>
                <div className='NavToPro-Desc'>With Exiting Offers</div>
                <div className='NavToPro-Icon'><ImArrowDown /></div>
                <div className='NavToPro-Btn'><button onClick={moveToProducts}>Products</button></div>
            </div>
        </div>
    )
}
