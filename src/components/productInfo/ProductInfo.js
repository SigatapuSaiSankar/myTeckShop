import React, { useContext, useEffect } from 'react'
import "./ProductInfo.css"
import { FaCheck } from "react-icons/fa";
import Buttons from '../products/Buttons';
import { userContext } from '../../context/AppContext';
import { useParams } from 'react-router-dom';
import { IoIosStar } from "react-icons/io";

export default function ProductInfo() {
    const {cartItems,setCartItems,products} = useContext(userContext);
    const {productId} = useParams();
    const productArrayFormat = products.filter((p)=>{
        return p.id==productId;
    })
    const [product] = productArrayFormat;
    // useEffect(()=>{
    //     console.log(product);
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

    // if (!product) return <p>Product not found.</p>;
    return (
        <div className="mainProductInfo">
            <div className="leftImages">
                {product.images && product.images.map((image, index) => (
                    <div className="selectImage" key={index}>
                        <img src={`.${image}`} alt={`${product.title} ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className="mainImage">
                <img src={`.${product.imageUrl}`} alt={product.title} />
            </div>
            <div className="rightInformation">
                <h1 className="productName">{product.title}</h1>
                <h3 className="productDesc">{product.description}</h3>
                <div className="infoStars">
                    {/* {[...Array(product.rating)].map((_, index) => (
                        <div className="star" key={index}>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    ))} */}
                    {Array.from({length: product.rating}).map((v,i)=> <div className="stars"><IoIosStar /></div>)}
                    <p>| 1234 Ratings</p>
                </div>

                <div className="pricing">
                    <div className="pri">
                        <p className="price">
                            ₹{product.price} <strike className="cutPrice">₹{product.cutPrice}</strike>
                        </p>
                        <p className="saving">
                            You save: ₹{product.cutPrice - product.price} ({Math.round(((product.cutPrice - product.price) / product.cutPrice) * 100)}%)
                        </p>
                        <p className="inclusive">(Inclusive of all taxes)</p>
                    </div>
                    <button className="inStock">
                        <div><FaCheck /></div>
                        <div className='stock'>In Stock</div>
                    </button>
                </div>

                <div className="offers">
                    <h2 className="offersHeading">Offers and Discount</h2>
                    <div className="applicableoffers">
                        <div className="offerCard">No Cost EMI on Credit Card</div>
                        <div className="offerCard">Pay Later & Avail Cashback</div>
                    </div>
                </div>
                {(cartItems[product.id])?<Buttons product={product}/>:<button className="addToCart" onClick={()=>addToCart(product)}>Add to cart</button>}
            </div>
        </div>
    )
}

// ProductInfo.defaultProps = {
//     product: {
//         id: "1",
//         title: "JBL Live 660NC",
//         description: "Wireless Over-Ear NC Headphones",
//         price: 9999,
//         cutPrice: 14999,
//         rating: 5,
//         imageUrl: "./images/products/jbl660nc-1.png",
//         images: [
//             "./images/products/jbl660nc-1.png",
//             "./images/products/jbl660nc-2.png",
//             "./images/products/jbl660nc-3.png",
//             "./images/products/jbl660nc-4.png"
//         ]
//     }
// }