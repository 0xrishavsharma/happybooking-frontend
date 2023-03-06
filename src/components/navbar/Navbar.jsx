import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ textDecoration: 'none', color: "white" }}>
          <span className="logo">HappyBooking</span>
        </Link>
        <div className="navItems">
          <button className="register">Register</button>
          <button className="login">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar