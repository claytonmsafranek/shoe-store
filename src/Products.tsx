import { useProducts } from "./hooks/useProducts";
import { useSearchParams } from "react-router-dom";
import { Product } from "./types/product";

type ProductsProps = {
  cart: Product[];
  setCart: (cart: Product[]) => void;
}

export default function Products(props: ProductsProps) {
  const {data: products = [], error, isLoading } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") ?? "";
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
        value={search} //this is now a controlled input
        onChange={(e) => setSearchParams({search: e.target.value})}
      />
      {matchingProducts.length > 0 ? (
      <table style={{border: "1px solid"}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {matchingProducts.map((product) => (
            <tr key={product.id}>
              <th>{product.name}</th>
              <th>{product.price}</th>
              <th>{product.description}</th>
              <th>
                <button
                  aria-label={`Add ${product.name} to cart`}
                  onClick={() => {
                    props.setCart([...props.cart, product])
                  }}
                >Add to Cart</button>
              </th>
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
