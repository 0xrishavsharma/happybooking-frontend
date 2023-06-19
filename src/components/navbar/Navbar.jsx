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
					<span data-testid='logo' className="logo">HappyBooking</span>
				</Link>
				<div className="flex items-center justify-center gap-4 navItems">
					{!user ? (
						<Link to="/login">
							<button role="register" className="register">Register</button>
						</Link>
					) : (
						<span className="font-bold">{user.username}</span>
					)}

					{!user ? (
						<Link to="/login">
							<button role="login" className="login">Login</button>
						</Link>
					) : (
						<button
							className="logout"
							onClick={() => dispatch({ type: "LOGOUT" })}>
							Logout
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
