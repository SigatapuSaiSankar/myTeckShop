import React, { useContext } from 'react'
import { userContext } from '../../context/AppContext';
import CartItem from './CartItem';
import OrderSummary from './OrderSummary';
import "./Cart.css";
import EmptyCart from './EmptyCart';
import NavigateToProducts from './NavigateToProducts';

export default function Cart() {
    const { cartItems } = useContext(userContext);
    const cartArray = Object.values(cartItems);

    return (
        <div className="displaycart">
            <div className="displayItems">
                {Object.keys(cartArray).length!==0?
                    cartArray.map(item => (
                        <CartItem item={item} />
                    ))
                    :<EmptyCart/>
                }
            </div>
            {Object.keys(cartArray).length!==0?<OrderSummary cartArray={cartArray} />:<NavigateToProducts/>}
        </div>
    );
}
