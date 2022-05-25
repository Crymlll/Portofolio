import styles from "./style"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const About = () => {
	const classes = styles()

	return (
		<motion.div
			className={classes.home}
			initial={{ width: 0 }}
			animate={{ width: "100%" }}
			exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
		>
			<div className={classes.leftBar}>
				<h1 className={classes.text}>
					<p>
						<b>
							<img
								src={`${process.env.PUBLIC_URL}/waving-hand.gif`}
								alt="wave"
							/>{" "}
							Hi there,
						</b>
					</p>
					<p className={classes.nameFlex}>Its nice to meet you.</p>
				</h1>
				<p>
					I'm currently a student at Sumatera Institute of Technology
					🎓 studying Informatics Engineering 💻. This summer, I'm
					playing Valorant and stuck at Iron 2 and I'm still trying to
					get Radiant. I currently learning MERN stack and Mobile app.
				</p>
				<p>
					I was born and raised in Jakarta, Indonesia, where I
					developed a strong interest in the way technology affects
					behavior in society as well as a love for ketoprak. I'm
					easily inspired by people from unique place and my own
					experiences outside of work.
				</p>
				<p>
					If you'd like to chat or challange me to a friendly game of
					badminton 🏸, let me know!
				</p>
				<Link className={classes.link} to="/projects">
					<button className={classes.btnHome}>
						<p className={classes.textMore}>See My Projects</p>
					</button>
				</Link>
			</div>
			<div className={classes.rightBar}>
				<img
					className={classes.img}
					src={`${process.env.PUBLIC_URL}/profile(2)-circle.png`}
					alt="profile"
				/>
			</div>
		</motion.div>
	)
}

export default About
