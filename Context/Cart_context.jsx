import { createContext, useContext,useState } from 'react';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

     const getTotal = () => {
       let total = 0;
       cart.map((item) => {
         total += item.price * item.quantity;
         total = parseFloat(total.toFixed(2));
       });
       setTotal(total);
     };

    const addToCart = (product, quantity) => {
        setCart((prev) => {
            if(prev.some((item) => item.id === product.id)) {
                return prev.map((item) => {
                    if(item.id === product.id) {
                        return {...item, quantity: item.quantity + quantity};
                    }
                    return item;
                });
            }
            const newProduct = {...product, 
                quantity: quantity};
            return [...prev, newProduct];
         });
    }
   
    const updateQuantity = (id, quantity) => {
        setCart((prev) => {
            return prev.map((item) => {
                if(item.id === id) {
                    return {...item, quantity: quantity};
                }
                return item;
            });
        });
    }

    const deleteItem = (id) => {
        setCart((prev) => {
            return prev.filter((item) => item.id !== id);
        })
    }
    const checkOut = () => {
        setCart([]);
        alert('Checkout successful');
    }


     
    return (
      <CartContext.Provider
        value={{ cart, addToCart, checkOut, getTotal, total, updateQuantity, deleteItem }}
      >
        {children}
      </CartContext.Provider>
    );
};  
   
// The useCart hook has been moved to a separate file.
