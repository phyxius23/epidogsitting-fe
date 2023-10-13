import "bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";
import "./assets/css/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Home from "./components/Home";
// import SignInRef from "./components/SignInRef";
// import SignUp from "./components/SignUp";
// import Search from "./components/Search";
// import Profile from "./components/Profile";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import { Dogsitter } from "./pages/Dogsitter";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/sign-in"
						element={<SignIn />}
					/>
					<Route
						path="/sign-up-dogowner"
						element={<SignUp />}
					/>
					<Route
						path="/search-dogsitters"
						element={<Search />}
					/>
					<Route
						path="/my-profile"
						element={<Profile />}
					/>
					<Route
						path="/dogsitter/:dogsitterId"
						element={<Dogsitter />}
					/>
				</Routes>
				<Header />
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
