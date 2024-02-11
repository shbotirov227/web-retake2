import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import SignUp from "./pages/SignUp/SignUp";

import "./assets/index.scss";

function App() {
	return (
		<div className="App">
			<div className="videoTag">
			</div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/about-us" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
