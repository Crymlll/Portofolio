import { Link } from "react-router-dom"
import style from "./style.jsx"

const NavBar = () => {
	const classes = style()

	return (
		<div className={classes.NavBar}>
			<h2 className={classes.logo}>Crymlll.dev</h2>
			<div className={classes.link}>
				<ul className={classes.ul}>
					<li className={classes.li}>
						<Link className={classes.p} to="/">
							<p>Home</p>
						</Link>
					</li>
					<li className={classes.li}>
						<Link className={classes.p} to="about">
							<p>About</p>
						</Link>
					</li>
					<li className={classes.li}>
						<Link className={classes.p} to="projects">
							<p>Projects</p>
						</Link>
					</li>
					<li className={classes.li}>
						<Link className={classes.p} to="skills">
							<p>Skills</p>
						</Link>
					</li>
					<li className={classes.li}>
						<Link className={classes.p} to="contacts">
							<p>Contacts</p>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default NavBar
