import React from "react";
import Showcase from "../../components/layouts/showcase/Showcase";
import ProductListing from "../../components/layouts/productlisting/productList";
import Footer from "../../components/layouts/footer/Footer";
const HomesPage =() => {
   return (
    <section>
           <Showcase/>
           <ProductListing/>
           <Footer/>
    </section>
   )


}

export default HomesPage;