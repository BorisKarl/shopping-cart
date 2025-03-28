import { ApiContext } from "../Context/Context";
import { CartContext } from "../Context/Cart_context";
import { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Nav from "./Nav";
import Cart from "./Cart";
import "../Styles/ProductDetail.css";

const ProductDetail = () => { 
    const { items, isLoading, error } = useContext(ApiContext);
    const { cart, addToCart, deleteItem, getTotal, updateQuantity } =
      useContext(CartContext);
    const { id } = useParams();
    // const [quantity, setQuantity] = useState(1);
    
    const product = items?.find((item) => item.id === parseInt(id));

    useEffect(() => {
      getTotal();
    }
    ,[cart]);

    if (isLoading) return <div>Lädt...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!product) return <div>Produkt nicht gefunden</div>;
    
    return (
      <>
        <Nav />
        <Cart />
        <div key={product.id} className="product_detail_container">
          <img
            className="product_detail_image"
            src={product.image}
            alt={product.title}
          />
          <div className="product_detail_info">
            <p className="product_detail_title">{product.title}</p>
            <p className="product_detail_description">{product.description}</p>
            <p className="product_detail_price">{product.price} €</p>
         
            <button
              className="product_detail_button"
              onClick={() => addToCart(product, product.quantity)}
            >
              Buy
            </button>
          </div>
        </div>
        <Link className="product_detail_link" to="/products">
          Back to products
        </Link>
      </>
    );
}

export default ProductDetail;

