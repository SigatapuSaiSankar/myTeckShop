import React from 'react'
import "./EmptyCart.css"

export default function EmptyCart() {
    return (
        <div>
            {/* <h1 style={{color:'white'}}>Empty Cart</h1> */}
            <div className='EmptyImg'>
                <div className='EmptyCart'>
                <img src='./EmptyCart.png' alt='EmptyCart'></img>
                </div>
            </div>
        </div>
    )
}
