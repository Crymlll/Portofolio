import { createUseStyles } from "react-jss"
const styles = createUseStyles({
	projects: {
		display: "grid",
		gridTemplateColumns: "repeat(3, 1fr)",
		margin: "80px",
		alignItems: "center",
		gridGap: "20px",
		// flexDirection: "row",
		// justifyContent: "center",
		// alignItems: "center",
		// marginBottom: "40px",
		// display: "flex",
	},
	img: {
		width: "480px",
		objectFit: "cover",
	},
	bottom: {
		marginTop: "5%",
		alignItems: "center",
		textAlign: "center",
	},
	form: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		margin: "0 auto",
	},
	input: {
		border: "1px solid #ccc",
		borderRadius: "5px",
		padding: "10px",
		marginBottom: "10px",
		width: "100%",
	},
	textarea: {
		border: "1px solid #ccc",
		borderRadius: "5px",
		padding: "10px",
		width: "100%",
		height: "200px",
	},
	button: {
		backgroundImage:
			"linear-gradient(to right, #00c6ff 0%, #0072ff  51%, #00c6ff  100%)",
		margin: "10px",
		padding: "10px",
		textAlign: "center",
		textTransform: "uppercase",
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
		width: "20%",
		alignItems: "center",
		justifyContent: "center",
		float: "right",
	},
	commentSection: {
		display: "flex",
		flexDirection: "column",
	},
	comment: {
		display: "flex",
	},
	commentProfile: {
		// width: "10%",
		margin: "1%",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	userIcon: {
		alignself: "center",
	},
	commmentBody: {
		// width: "90%",
		height: "100%",
	},
	textCommentHead: {
		display: "flex",
		alignItems: "center",
	},
	textComment: {
		fontSize: "15px",
	},
	textDate: {
		fontSize: "12px",
		marginLeft: "10px",
	},
	deleteIcon: {
		marginLeft: "10px",
		cursor: "pointer",
		"&:hover": {
			color: "#de1010",
		},
	},
	project: {
		// boxShadow: "5px 5px 5px 0px rgba(0, 0, 0, 0.5)",
		borderRadius: "20px",
		textAlign: "center",
		"&:hover": {
			boxShadow: "1px 2px 3px 0px rgb(0, 189, 255)",
			transform: "scale(1.05)",
			transition: "all 0.3s ease-in-out",
		},
		cursor: "pointer",
	},

	[`@media (max-width: 1800px)`]: {
		projects: {
			gridTemplateColumns: "repeat(2, 1fr)",
		},
	},
	[`@media (max-width: 1400px)`]: {
		projects: {
			gridTemplateColumns: "repeat(1, 1fr)",
		},
	},
	[`@media (max-width: 800px)`]: {
		projects: {
			display: "flex",
			flexDirection: "column",
		},
	},
	[`@media (min-width: 1400px)`]: {
		form: {
			display: "flex",
			flexDirection: "column",
			width: "30%",
			margin: "0 auto",
		},
		input: {
			border: "1px solid #ccc",
			borderRadius: "5px",
			padding: "10px",
			marginBottom: "10px",
			width: "100%",
		},
		textarea: {
			border: "1px solid #ccc",
			borderRadius: "5px",
			padding: "10px",
			width: "100%",
			height: "200px",
		},
	},
})
export default styles
