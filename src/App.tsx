import { Link, Route, Routes } from "react-router-dom";
import Products from "./Products";
import { About } from "./About";
import { Admin } from "./Admin";
import { Product, productSchema } from "./types/product";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { z } from "zod";

export function App() {
    const [itemsInCart, setItemsInCart] = useLocalStorage<Product[]>(
        "cart",
        [],
        z.array(productSchema)
    );

    return (
        <>
            <nav>
                <Link to='/'>Products</Link>
                <Link to='/about'>About</Link>
                <Link to='/admin'>Admin</Link>
                <Link to='/cart'>Cart ({itemsInCart.length})</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Products setCart={setItemsInCart} cart={itemsInCart}/>} />
                <Route path="/about" Component={About} />
                <Route path="/admin" Component={Admin} />
            </Routes>
        </>
    )
}