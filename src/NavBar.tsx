import { Link } from "react-router-dom";
import { Product } from "./types/product";
import { useSnapshot } from "valtio";
import { userState } from "./state/userState";

type NavBarProps = {
    cart: Product[];
}

export function NavBar(props: NavBarProps) {
    const { user } = useSnapshot(userState);

    return (
        <nav>
            <Link to='/'>Products</Link>
            <Link to='/about'>About</Link>
            <Link to='/admin'>Admin</Link>
            <Link to='/cart'>Cart ({props.cart.length})</Link>

            {user && (
                <p>Hi {user.name}. <button onClick={(() => { user = null })}>Logout</button></p>
            )}
        </nav>
    )
}
