import { Link } from "react-router-dom";
import { Product } from "./types/product";
import { useStore } from "./store/store";

type NavBarProps = {
    cart: Product[];
}

export function NavBar(props: NavBarProps) {
    const { user, logout } = useStore();

    return (
        <nav>
            <Link to='/'>Products</Link>
            <Link to='/about'>About</Link>
            <Link to='/admin'>Admin</Link>
            <Link to='/cart'>Cart ({props.cart.length})</Link>

            {user && (
                <p>Hi {user.name}. <button onClick={(() => logout())}>Logout</button></p>
            )}
        </nav>
    )
}
