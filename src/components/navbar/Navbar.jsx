import { useContext } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
	const { user, dispatch } = useContext(AuthContext);
	return (
		<div className="navbar">
			<div className="navContainer">
				<Link to="/" style={{ textDecoration: "none", color: "white" }}>
					<span className="logo">HappyBooking</span>
				</Link>
				<div className="navItems">
					<button className="register">Register</button>
					<Link to="/login">
						<button className="login">Login</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
