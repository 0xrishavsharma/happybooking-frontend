import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">HappyBooking.com</span>
            <div className="navItems">
                <button className="register">Register</button>
                <button className="login">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar