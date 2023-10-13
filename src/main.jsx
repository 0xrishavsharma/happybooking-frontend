import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.scss";
import { SearchContextProvider } from "./context/SearchContext";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<AuthContextProvider>
		<SearchContextProvider>
			<App />
		</SearchContextProvider>
	</AuthContextProvider>
);
