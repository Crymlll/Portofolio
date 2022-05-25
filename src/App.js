import { BrowserRouter as Router } from "react-router-dom"

import Footer from "./components/Footer"
import NavBar from "./components/NavBar"

import AnimatedRoutes from "./components/AnimatedRoutes"

import "./App.css"

function App() {
	return (
		<Router>
			<div className="app">
				<NavBar />
				<AnimatedRoutes />
				<Footer />
			</div>
		</Router>
	)
}

export default App
