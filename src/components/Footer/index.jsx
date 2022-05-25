import styles from "./style"
import { Icon } from "@iconify/react"

const Footer = () => {
	const classes = styles()
	return (
		<footer className={classes.footer}>
			<a
				href="https://www.facebook.com/aulia.rahman.zulfi/"
				target={`_blank`}
			>
				<Icon
					className={classes.icon}
					icon="brandico:facebook-rect"
					width="48"
				/>
			</a>
			<a href="https://www.instagram.com/auliarahmanz/" target={`_blank`}>
				<Icon
					className={classes.icon}
					icon="cib:instagram"
					width="48"
				/>
			</a>
			<a
				href="https://www.linkedin.com/in/aulia-rahman-zulfi-634a71205/"
				target={`_blank`}
			>
				<Icon
					className={classes.icon}
					icon="akar-icons:linkedin-fill"
					width="48"
				/>
			</a>
			<a href="https://discord.gg/x2tKucs" target={`_blank`}>
				<Icon className={classes.icon} icon="bi:discord" width="48" />
			</a>
			<a href="https://github.com/Crymlll" target={`_blank`}>
				<Icon
					className={classes.icon}
					icon="akar-icons:github-fill"
					width="48"
				/>
			</a>
		</footer>
	)
}

export default Footer
