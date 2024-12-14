import React, { useContext } from 'react'
import { userContext } from '../../context/AppContext'
import ProductCard from './ProductCard';
import './Product.css';

export default function Product() {
    const {products} = useContext(userContext);
    return (
        <div className="topProducts">
            {/* <h1 className="topHeading">Top Products</h1>
            <div className="subHeadings">
                <ul class="productList">
                    <li className="item1" style={{backgroundColor:"#ff0000",color:"#ffffff"}}>All</li>
                    <li className="item2">HeadPhones</li>
                    <li className="item3">Earbuds</li>
                    <li className="item4">Earphones</li>
                    <li classn="item5">Neckbands</li>
                </ul>
            </div> */}
            <div className="product">
            {products.map((product) => (
                <ProductCard product={product} />
            ))}
        </div>
        </div>
    )
}
