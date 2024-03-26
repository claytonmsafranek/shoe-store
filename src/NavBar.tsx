import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <nav>
            <Link to='/'>Products</Link>
            <Link to='/about'>About</Link>
            <Link to='/admin'>Admin</Link>
        </nav>
    )
}
