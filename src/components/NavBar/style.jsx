import { createUseStyles } from "react-jss"
const styles = createUseStyles({
	NavBar: {
		height: "50px",
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: "40px",
	},
	logo: {
		fontWeight: 600,
	},
	ul: {
		listStyle: "none",
		position: "relative",
		left: "50px",
		float: "right",
		marginRight: "40px",
	},
	li: {
		display: "inline-block",
		lineHeight: "50px",
		margin: "0 7px",
	},
	p: {
		textTransform: "uppercase",
		fontSize: "14px",
		"&:link": {
			textDecoration: "none!important",
			cursor: "pointer",
		},
		fontFamily: "Poppins",
		fontWeight: 500,
		color: "#182fdb",
		"&:hover": {
			backgroundPosition: "right center",
			color: "rgb(0, 189, 255)",
			textDecoration: "none",
			transition: "0.3s",
		},
	},
})
export default styles
