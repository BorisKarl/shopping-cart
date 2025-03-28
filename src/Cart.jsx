import { useContext } from "react";
import { CartContext } from "../Context/Cart_context";
import "../Styles/Cart.css";

const Cart = () => { 

    const { cart, checkOut, total, updateQuantity, deleteItem } = useContext(CartContext);
    const showCart = () => {
        const cart_div = document.getElementById("toggle");
        cart_div.classList.toggle("show");
    }
    return (
      <div className="cart_container">
        <button className="cart_hamburger_button" onClick={showCart}>
          ☰
        </button>
        <div id="toggle" className="hide">
          <div id="cart_ul">
            {cart.length === 0 && <p>Cart is empty</p>}
            {cart.map((item) => (
              <div key={item.id} className="cart_item">
                <div className="cart_image_button_wrapper">
                  <img
                    className="cart_image"
                    src={item.image}
                    alt={item.title}
                  />
                  <button
                    className="delete_button"
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </button>
                </div>
                <p>{item.title}</p>
                <div className="price_wrapper">
                  <p>{item.price} €</p>
                  <input
                    type="number"
                    placeholder={item.quantity}
                    min="1"
                    max="10"
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                  />
                </div>
              </div>
            ))}
          </div>

          <button className="cart_checkout_button" onClick={() => checkOut()}>
            Checkout
          </button>
        </div>
        <p className="total_p">Total: {total} €</p>
      </div>
    );

}

export default Cart;
