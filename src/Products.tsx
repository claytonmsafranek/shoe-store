import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { useProducts } from "./hooks/useProducts";
import { Product } from "./types/product";

export default function Products() {
  const {data: products = [], error, isLoading } = useProducts();
  const [search, setSearch] = useState("");

  
  if (error) throw error;
  if (isLoading) return <h1>Loading...</h1>
  const matchingProducts = search 
    ? products.filter((product) => 
        product.name.toLowerCase().includes(search.toLowerCase())
    )
      : products;

  return (
    <>
      <h1>Products</h1>
      <input 
        type="search" 
        id="searchBox" 
        name="searchBox"
        placeholder="Search ..." 
        onChange={(e) => setSearch(e.target.value)}
      />
      {matchingProducts.length > 0 ? (
      <table style={{border: "1px solid"}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {matchingProducts.map((product) => (
            <tr key={product.id}>
              <th>{product.name}</th>
              <th>{product.price}</th>
              <th>{product.description}</th>
            </tr>
          ))}
        </tbody>
      </table>
      ) : (
        <p>No products found.</p>
      )}
    </>
  );
}
