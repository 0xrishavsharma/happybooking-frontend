import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
	const navigate = useNavigate();
	const [credentials, setCredentials] = useState({
		username: undefined,
		password: undefined,
	});

	const loginButtonHandler = async (e) => {
		e.preventDefault();
		try {
			dispatch({ type: "LOGIN_START" });
			const res = await axios.post("https://happybooking-backend.onrender.com/api/auth/login", credentials);
			dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
			console.log(res);
			navigate("/");
		} catch (err) {
			console.log(err);
			dispatch({ type: "LOGIN_FAILURE", payload: err });
		}
	};

	const registerButtonHandler = async (e) => {
		e.preventDefault();
		dispatch({ type: "LOGIN_START" });
		try {
			const res = await axios.post("api/auth/register", credentials);
			console.log(res);
			dispatch({
				type: "LOGIN_SUCCESS",
				payload: res.data,
			});
		} catch (err) {
			console.log(err);
			dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
		}
	};

	const { loading, error, dispatch } = useContext(AuthContext);
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1 className="mb-8 text-4xl font-black">HappyBooking </h1>
			<div className="flex flex-col gap-3">
				<input
					type="text"
					placeholder="username"
					id="username"
					className="h-8 px-2 py-5 border-[1px] border-gray-500 rounded-sm outline-none"
					onChange={(e) =>
						setCredentials((prev) => ({
							...prev,
							[e.target.id]: e.target.value,
						}))
					}
				/>
				<input
					type="password"
					placeholder="password"
					id="password"
					className="h-8 px-2 py-5 border-[1px] border-gray-500 rounded-sm outline-none"
					onChange={(e) =>
						setCredentials((prev) => ({
							...prev,
							[e.target.id]: e.target.value,
						}))
					}
				/>
				<button
					disabled={loading}
					className="px-3 py-2  bg-[var(--secondary-color)] text-white font-bold cursor-pointer rounded-sm disabled:bg-[var(--secondary-color-light)] disabled:cursor-not-allowed"
					onClick={loginButtonHandler}>
					{loading ? (
						<FontAwesomeIcon icon={faCircleNotch} className="animate-spin" />
					) : (
						"Login"
					)}
				</button>
				{error && <span className="error">{error.response.data.message}</span>}
			</div>
		</div>
	);
};

export default Login;
