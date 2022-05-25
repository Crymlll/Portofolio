import { createUseStyles } from "react-jss"
const styles = createUseStyles({
	skills: {
		marginTop: "5%",
		padding: "20px",
	},
	box: {
		marginBottom: "5%",
	},
	technologies: {
		padding: "30px",
		flexDirection: "row",
	},
	[`@media (min-width: 800px)`]: {
		content: {
			gridTemplateColumns: "1fr 1fr 1fr",
		},
	},
})
export default styles
