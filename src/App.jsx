import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Search from "./components/Search";
import Profile from "./components/Profile";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/sign-up-dogowner" element={<SignUp />} />
					<Route path="/search-dogsitters" element={<Search />} />
					<Route path="/my-profile" element={<Profile />} />
				</Routes>
				<Header />
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
