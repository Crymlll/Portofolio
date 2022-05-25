import styles from "./style"
import { motion } from "framer-motion"

const About = () => {
	const classes = styles()

	return (
		<motion.div
			className={classes.skills}
			initial={{ width: 0 }}
			animate={{ width: "100%" }}
			exit={{ x: window.innerWidth, transition: { duration: 0.0 } }}
		>
			<div className={classes.box}>
				<h3>Fullstack Developer</h3>
				<a
					className={classes.technologies}
					href="https://www.mongodb.com/"
					target={`_blank`}
				>
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
						alt="mongodb"
						width="40"
						height="40"
					/>
				</a>
				<a
					className={classes.technologies}
					href="https://expressjs.com"
					target={`_blank`}
				>
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
						alt="express"
						width="40"
						height="40"
					/>
				</a>
				<a
					className={classes.technologies}
					href="https://reactjs.org/"
					target={`_blank`}
				>
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
						alt="react"
						width="40"
						height="40"
					/>
				</a>
				<a
					className={classes.technologies}
					href="https://nodejs.org"
					target={`_blank`}
				>
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
						alt="nodejs"
						width="40"
						height="40"
					/>
				</a>
				<a
					className={classes.technologies}
					href="https://laravel.com/"
					target={`_blank`}
				>
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg"
						alt="laravel"
						width="40"
						height="40"
					/>
				</a>
				<a
					className={classes.technologies}
					href="https://www.mysql.com/"
					target={`_blank`}
				>
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
						alt="mysql"
						width="40"
						height="40"
					/>
				</a>
				<a
					className={classes.technologies}
					href="https://flask.palletsprojects.com/"
					target={`_blank`}
				>
					<img
						src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg"
						alt="flask"
						width="40"
						height="40"
					/>
				</a>
			</div>
			<div className={classes.box}>
				<h3>Mobile Developer</h3>
				<a
					className={classes.technologies}
					href="https://reactnative.dev/"
					target={`_blank`}
				>
					<img
						src="https://reactnative.dev/img/header_logo.svg"
						alt="reactnative"
						width="40"
						height="40"
					/>
				</a>
				<a
					className={classes.technologies}
					href="https://firebase.google.com/"
					target={`_blank`}
				>
					<img
						src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
						alt="firebase"
						width="40"
						height="40"
					/>
				</a>
			</div>
			<div className={classes.box}>
				<h3>Tools</h3>
				<a
					className={classes.technologies}
					href="https://www.arduino.cc/"
					target={`_blank`}
				>
					<img
						src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg"
						alt="arduino"
						width="40"
						height="40"
					/>
				</a>
				<a
					className={classes.technologies}
					href="https://www.figma.com/"
					target={`_blank`}
				>
					<img
						src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
						alt="figma"
						width="40"
						height="40"
					/>
				</a>
			</div>
		</motion.div>
	)
}

export default About
