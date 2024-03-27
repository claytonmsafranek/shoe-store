import { Link } from "react-router-dom";
import { Product } from "./types/product";
import { useAtom } from "jotai";
import { userAtom } from "./atoms/userAtom";

type NavBarProps = {
    cart: Product[];
}

export function NavBar(props: NavBarProps) {
    const [ user, setUser ] = useAtom(userAtom);

    return (
        <nav>
            <Link to='/'>Products</Link>
            <Link to='/about'>About</Link>
            <Link to='/admin'>Admin</Link>
            <Link to='/cart'>Cart ({props.cart.length})</Link>

            {user && (
                <p>Hi {user.name}. <button onClick={(() => setUser(null))}>Logout</button></p>
            )}
        </nav>
    )
}
