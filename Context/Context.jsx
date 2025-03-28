import { useState, useEffect, createContext } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Keine Daten verfügbar");
        }
        const json = await response.json();
        const itemsWithQuantity = json.map((item) => ({
          ...item,
          quantity: 1,
        }));
        setItems(itemsWithQuantity);
      } catch (error) {
        console.error("Fehler beim Laden:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);
    return (
      <ApiContext.Provider value={{ items, isLoading, error }}>
        {children}
      </ApiContext.Provider>
    );

};
