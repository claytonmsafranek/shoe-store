import { Route, Routes } from "react-router-dom";
import Products from "./Products";
import { About } from "./About";
import { Admin } from "./Admin";
import { Product, productSchema } from "./types/product";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { z } from "zod";
import { NavBar } from "./NavBar";

export function App() {
    const [itemsInCart, setItemsInCart] = useLocalStorage<Product[]>(
        "cart",
        [],
        z.array(productSchema)
    );

    return (
        <>
            <NavBar cart={itemsInCart} />
            <Routes>
                <Route path="/" element={<Products setCart={setItemsInCart} cart={itemsInCart}/>} />
                <Route path="/about" Component={About} />
                <Route path="/admin" Component={Admin} />
            </Routes>
        </>
    )
}