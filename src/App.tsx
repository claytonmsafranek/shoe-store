import { Link, Route, Routes } from "react-router-dom";
import Products from "./Products";
import { About } from "./About";
import { Admin } from "./Admin";
import { Product, productSchema } from "./types/product";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { z } from "zod";
import { useState } from "react";
import { User } from "./types/user";
import { UserContextProvider } from "./context/UserContext";
import { NavBar } from "./NavBar";

export function App() {
    const [itemsInCart, setItemsInCart] = useLocalStorage<Product[]>(
        "cart",
        [],
        z.array(productSchema)
    );
    const [user, setUser] = useState<User | null>({
        id: 1,
        name: "Default User",
        email: "defaultUser@user.com",
        password: "password"
    });

    return (
        <UserContextProvider user={user} setUser={setUser}>
            <NavBar cart={itemsInCart} />
            <Routes>
                <Route path="/" element={<Products setCart={setItemsInCart} cart={itemsInCart}/>} />
                <Route path="/about" Component={About} />
                <Route path="/admin" Component={Admin} />
            </Routes>
        </UserContextProvider>
    )
}