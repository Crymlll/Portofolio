import { createUseStyles } from "react-jss"
const styles = createUseStyles({
	home: {
		flexGrow: "1",
		minWidth: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		marginTop: "2%",
		fontFamily: "Poppins",
	},
	leftBar: {
		width: "100%",
		fontSize: "18px",
		alignItems: "center",
	},
	text: {
		fontSize: "25px",
		fontWeight: 500,
	},
	name: {
		color: "#182fdb",
		fontWeight: 700,
	},
	nameFlex: {
		display: "flex",
	},
	btnHome: {
		backgroundImage:
			"linear-gradient(to right, #00c6ff 0%, #0072ff  51%, #00c6ff  100%)",
		margin: "10px",
		paddingLeft: "20px",
		paddingRight: "20px",
		textAlign: "center",
		// textTransform: "uppercase",
		transition: "0.5s",
		backgroundSize: "200% auto",
		color: "white",
		borderRadius: "10px",
		marginTop: "5%",
		cursor: "pointer",
		border: "none",
		"&:hover": {
			backgroundPosition: "right center",
			color: "#fff",
			textDecoration: "none",
		},
	},
	textMore: {
		color: "#fff",
		fontWeight: "bold",
	},
	rightBar: {
		width: "100%",
		marginTop: "20px",
	},
	link: {
		"&:link": {
			textDecoration: "none!important",
			cursor: "pointer",
		},
	},
	img: {
		width: "80%",
		borderRadius: "250px",
	},
	[`@media (min-width: 800px)`]: {
		home: {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			textAlign: "center",
		},
		leftBar: {
			textAlign: "left",
		},
		img: {
			width: "70%",
			borderRadius: "250px",
			alignItems: "center",
		},
	},
	wrapper: {
		display: "flex",
	},
})

export default styles
