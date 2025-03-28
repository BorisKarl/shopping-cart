import { ApiContext } from "../Context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import "../Styles/Products.css";
import Cart from "./Cart";

const Products = () => {
  const { items, isLoading, error } = useContext(ApiContext);

   if (isLoading) {
     return <p>Lädt...</p>;
   }
  if (error) {
    return <p>{error}</p>;
  }
     
  const womenItems = items.filter((item) => item.category.startsWith("w"));
  const menItems = items.filter((item) => item.category.startsWith("m"));
  const electronicsItems = items.filter((item) =>
    item.category.startsWith("e")
  );
  const jeweleryItems = items.filter((item) => item.category.startsWith("j"));

  return (
    <>
      <Nav />
      <Cart />
      <div  className="cat_container">
        <h1 id="women">Women</h1>
        <p>Click on the image to see more details</p>
      </div>

      <div className="products_container">
        <ul className="products_list">
          {womenItems.map((item) => (
            <li key={item.id} className="products_list_item">
              <Link to={`/products/${item.id}`}>
                <img
                  className="products_page_img"
                  src={item.image}
                  alt={item.title}
                />
              </Link>
              <p>{item.price} €</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="cat_container">
        <h1 id="men">Men</h1>
        <p>Click on the image to see more details</p>
      </div>
      <div className="products_container">
        <ul className="products_list">
          {menItems.map((item) => (
            <li key={item.id} className="products_list_item">
              <Link to={`/products/${item.id}`}>
                <img
                  className="products_page_img"
                  src={item.image}
                  alt={item.title}
                />
              </Link>

              <p>{item.price} €</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="cat_container">
        <h1 id="electronics">Electronics</h1>
        <p>Click on the image to see more details</p>
        <div className="products_container">
          <ul className="products_list">
            {electronicsItems.map((item) => (
              <li key={item.id} className="products_list_item">
                <Link to={`/products/${item.id}`}>
                  <img
                    className="products_page_img"
                    src={item.image}
                    alt={item.title}
                  />
                </Link>

                <p>{item.price} €</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="cat_container">
          <h1 id="jewels">Jewelery</h1>
          <p>Click on the image to see more details</p>
        </div>
        <div className="products_container">
          <ul className="products_list">
            {jeweleryItems.map((item) => (
              <li key={item.id} className="products_list_item">
                <Link to={`/products/${item.id}`}>
                  <img
                    className="products_page_img"
                    src={item.image}
                    alt={item.title}
                  />
                </Link>

                <p>{item.price} €</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Products;
