import React from "react";
import './productListingCard.styles.css';
import { Link } from 'react-router-dom';

const ProductListingCard = ({ bookData }) =>{
    return(
        
        <div className="product-listing-card">
          <div className="product-listing-img-container">
            <img src={bookData.image} alt="product-listing-image" className="product-listing-image"/>
          </div>
          <div className="product-listing-details-container">
                <h3>{bookData.book_name}</h3>
                <p className="autor-name">{bookData.author_name}</p>
                <p className="pricing">&#x20a8; {bookData.price}</p>
                
          </div>
          <div className="card-btn-container">
          <Link to={`/book-details/${bookData.id}`}className="product-listing-button"> Add To Cart</Link>
          </div>
  
  </div>
    )
}

export default ProductListingCard;