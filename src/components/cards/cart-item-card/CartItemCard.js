import React, { useContext } from "react";
import './cart-item-card.styles.css';
import { CartContext } from "../../../App";




const CartItemCard = ({bookData}) => {

    const {cartItems, setCartItems} =useContext(CartContext);

     const handleRemove = () =>{
        console.log(bookData.id);
        setCartItems(cartItems.filter((item) => item.id !== bookData.id));
     }

    return(
        <div className="cart-item">
                <div className="cart-item-img-container">
                    <img src={bookData.image} alt="cart-item-img" className="cart-item-img"/>
                </div>
                <div className="cart-item-content-container">
                    <h2>{bookData.book_name}</h2>
                    <p>{bookData.author_name}</p>
                    <h3 className="cart-item-price">&#x20a8;{bookData.price}</h3>
                
                <button onClick={handleRemove} className="delete_btn">Remove From Cart</button>

                </div>

            </div>
    )
}


export default CartItemCard;