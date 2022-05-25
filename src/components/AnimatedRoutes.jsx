import React from "react"
import { useLocation, Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Home from "./Home"
import About from "./About"
import Projects from "./Projects"
import Skills from "./Skills"
import Contact from "./Contact"

const AnimatedRoutes = () => {
	const location = useLocation()
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/projects" element={<Projects />} />
				<Route exact path="/skills" element={<Skills />} />
				<Route exact path="/contacts" element={<Contact />} />
			</Routes>
		</AnimatePresence>
	)
}

export default AnimatedRoutes
