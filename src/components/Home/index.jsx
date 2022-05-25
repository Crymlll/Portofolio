import { Link } from "react-router-dom"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import styles from "./style"

import { motion } from "framer-motion"

const Home = () => {
	const classes = styles()

	const { text } = useTypewriter({
		words: [
			"Fullstack Developer",
			"Semicolon Lovers",
			"Mobile App Developer",
		],
		loop: false,
		typeSpeed: 50,
	})

	return (
		<motion.div
			className={classes.home}
			initial={{ width: 0 }}
			animate={{ width: "100%" }}
			exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
		>
			<div className={classes.leftBar}>
				<h1 className={classes.text}>
					<p>Hi, Everyone</p>

					<p className={classes.nameFlex}>
						<p> It's &nbsp;</p>
						<p className={classes.name}>Aulia Rahman Zulfi</p>
					</p>
					<div className={classes.wrapper}>
						<div className={classes.staticText}>I'm a &nbsp;</div>
						<span className={classes.dynamicText}>{text}</span>
						<Cursor />
					</div>
				</h1>
				<Link className={classes.link} to="about">
					<button className={classes.btnHome}>
						<p className={classes.textMore}>Know me more</p>
					</button>
				</Link>
			</div>
			<div className={classes.rightBar}>
				<img
					className={classes.img}
					src={`${process.env.PUBLIC_URL}/profile-circle.png`}
					alt="profile"
				/>
			</div>
		</motion.div>
	)
}

export default Home
