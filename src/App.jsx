import "./App.scss";
import {
	BrowserRouter as Router,
	Route,
	BrowserRouter,
	Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotels from "./pages/hotels/Hotels";
import Hotel from "./pages/hotel/Hotel";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/hotels" element={<Hotels />} />
				<Route path="/hotels/:id" element={<Hotel />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
