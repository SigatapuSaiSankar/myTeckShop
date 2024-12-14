import React, { useContext } from 'react';
import { userContext } from '../../context/AppContext';
import "./PreviousOrders.css"

function PreviousOrders() {
    const { user } = useContext(userContext);

    if (user.ordersummary.length === 0) {
        return <p>No orders available.</p>;
    }

    return (
        <div className='orderContainer'>
            <h2 className='orderSummary'>Order Summary</h2>
            <p className='userInfo'><strong>User:</strong> {user.username}</p>
            <p className='userInfo'><strong>Email:</strong> {user.email}</p>
            <hr/>
            <div className='orderInfo'>
                {user.ordersummary.map((order, index) => (
                    <div key={index} className='tableMain'>
                        <h3>Order {index + 1}</h3>
                        <table className='tableStart'>
                            <thead>
                                <tr className='tableHead'>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {order.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.title}</td>
                                        <td>{item.description}</td>
                                        <td>₹{item.price}</td>
                                        <td>{item.quantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PreviousOrders;