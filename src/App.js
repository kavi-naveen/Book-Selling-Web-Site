import React, { useState,useEffect, createContext }from "react";
import { Routes,Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import HomePage from  "./pages/homespage/HomesPage"
import BooksPage from "./pages/bookspage/BooksPage";
import CartPage from "./pages/cartpage/CartPage";
import BookDetailsPage from "./pages/bookdetailspage/BookDetails";
import Login from "./pages/loginpage/Login";
import SignUp from "./pages/signuppage/Signup";
import app from "./firebase/firebase";
import ScrollToTop from "./components/utill/ScrollToTop";
import AdminDashboard from "./pages/admin/AdminDashbord";

export const UserContext =createContext({});
export const CartContext = createContext({});

const App =() => {
    const auth = getAuth(app);

    const [authenticatedUser, setAuthenticatedUser] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount,setTotalAmount] = useState(0);

    useEffect(() => {
        onAuthStateChanged( auth, (user) => {
            if(user) { 
                
                setAuthenticatedUser(user);
            }else {
                setAuthenticatedUser(null)
            }
            })
    },[])

    useEffect(() => {
        let total = 0;
        cartItems.forEach((item) => {
            total = total + parseInt(item.price);
        })

        setTotalAmount(total);
    },[cartItems])

    return (
        <ScrollToTop>
        <UserContext.Provider value = {authenticatedUser}> 
          <CartContext.Provider value={{cartItems, totalAmount, setCartItems}}>
            <Routes>
                <Route path="/" element={<HomePage/>}  />
                <Route path="/books" element={<BooksPage/>} />
                <Route path="/cart" element={<CartPage/>} />
                <Route path="/book-details/:id" element={<BookDetailsPage/>} />
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
              
        </Routes>
        </CartContext.Provider>   
        </UserContext.Provider>
        </ScrollToTop>
    )


}

export default App;