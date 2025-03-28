import { ApiProvider } from "../Context/Context";
import { CartProvider } from "../Context/Cart_context";
import { Outlet } from "react-router-dom";

function App() {
    return (
      <>
        <ApiProvider>
          <CartProvider>
            <Outlet />
          </CartProvider>
        </ApiProvider>
      </>
    );  
}

export default App;
