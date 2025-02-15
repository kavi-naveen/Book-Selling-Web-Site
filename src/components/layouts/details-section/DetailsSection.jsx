import React, { useEffect, useState} from "react";
import './detailsSection.styles.css';

import { useParams,useNavigate } from "react-router-dom";
import { BookData } from "../../util/BookData";
import { CartContext, UserContext } from "../../../App";
import { useContext } from "react";

const DetailsSection =() => {
    const{ id } = useParams();
    const [bookData, setBookData] = useState({});

    const user = useContext(UserContext);
    const {cartItems, setCartItems} = useContext (CartContext);
    const navigate = useNavigate();
     
 useEffect (() =>{
    let newData = BookData.filter((book) => book.id === parseInt(id));
    
    setBookData(newData[0])
 },[]
 )

   const handleAddToCart = () =>{
      if(user){
         setCartItems([...cartItems, bookData]);
            alert(`The book ${bookData.book_name} is added to the cart`);
      }else{
         navigate('/login');
         alert ("Please Login or Singnup First...")

      }
      
   }

    return (
     <section className="detail-section-container">
        
     <div className="container">
        <div className="flex-container">
            <div className="book-img-container">
                  <img src={bookData.image} alt="book"/>
            </div>
            <div className="book-detail-container">
                <h2>{bookData.book_name}</h2>
                <p className="text-primary">{bookData.author_name}</p>
                <p className="book-discription">{bookData.book_discription}</p>
                <p><b>Language:</b> {bookData.language}</p>
                <p><b>Pages:</b> {bookData.print_length}</p>
                <h3> &#x20a8;{bookData.price}</h3>

                <a onClick={handleAddToCart} className="button-primary">Add To Cart</a>

            </div>
        </div>
     </div>
 
        
     </section>
    )
 
 
 }
 
 export default DetailsSection;