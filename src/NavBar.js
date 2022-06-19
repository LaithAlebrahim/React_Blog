import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 

        <nav className="navbar">
            <h1>Laith-blog</h1>
            <div className="links">
            <Link to="/React_Blog">Home</Link>
                <Link to="/create">Create</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
