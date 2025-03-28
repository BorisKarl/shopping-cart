import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../Styles/Nav.css";


const Nav = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <nav className="nav_list">
      <div className="nav_links">

        {currentPath === "/products" && (
          <>
            <ScrollLink
              className="scroll-link"
              to="women"
              smooth={true}
              duration={500}
              spy={true}
              offset={-200}
            >
              Top
            </ScrollLink>
            <ScrollLink
              className="scroll-link"
              to="women"
              smooth={true}
              duration={500}
              spy={true}
              offset={-200}
            >
              Women
            </ScrollLink>
            <ScrollLink
              className="scroll-link"
              to="men"
              smooth={true}
              duration={800}
              spy={true}
              offset={-100}
            >
              Men
            </ScrollLink>
            <ScrollLink
              className="scroll-link"
              to="electronics"
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
            >
              Electronics
            </ScrollLink>
            <ScrollLink
              className="scroll-link"
              to="jewels"
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
            >
              Jewelery
            </ScrollLink>
          </>
        )}

        {currentPath !== "/products" && (
          <RouterLink className="back_to_products" to="/products">Back to the shop</RouterLink>
        )}
      </div>
    </nav>
  );
};

export default Nav;
