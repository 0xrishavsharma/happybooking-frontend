import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ textDecoration: 'none', color: "white" }}>
          <span data-testid='logo' className="logo">HappyBooking</span>
        </Link>
        <div className="navItems">
          <button role="register" className="register">Register</button>
          <button role="login" className="login">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar