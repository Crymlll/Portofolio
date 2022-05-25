import { createUseStyles } from "react-jss"
const styles = createUseStyles({
	footer: {
		width: "90%",
	},
	icon: {
		marginTop: "5%",
		paddingLeft: "20px",
		width: "20px",
		color: "#182fdb",
		"&:hover": {
			backgroundPosition: "right center",
			color: "rgb(0, 189, 255)",
			textDecoration: "none",
			width: "35px",
			transition: "0.3s",
		},
	},
	[`@media (min-width: 800px)`]: {
		icon: {
			width: "25px",
		},
	},
})

export default styles
