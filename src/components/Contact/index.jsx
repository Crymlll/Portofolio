import React from "react"
import styles from "./style"

import { motion } from "framer-motion"

const Contact = () => {
	const classes = styles()

	return (
		<motion.div
			className={classes.contact}
			initial={{ width: 0 }}
			animate={{ width: "100%" }}
			exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
		>
			<iframe
				className={classes.iframe}
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.9641301969004!2d106.85647719208399!3d-6.273163867817976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f25c6e4a5e5f%3A0xaa6d71b286c32049!2sJl.%20Condet%20Raya%201-4%2C%20RT.8%2FRW.1%2C%20Balekambang%2C%20Kec.%20Kramat%20jati%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013530!5e0!3m2!1sen!2sid!4v1635213587405!5m2!1sen!2sid"
				title="maps"
				frameBorder="0"
				allowFullScreen=""
				aria-hidden="false"
				tabIndex="0"
			></iframe>

			<h4>Phone</h4>
			<p>0822 9830 3678</p>

			<h4>Email</h4>
			<a href="mailto:auliarahmanzulfi@gmail.com?subject=Friendly%20Match&body=Hi%2C%20lets%20play%20some%20badminton%20games%20with%20me!">
				auliarahmanzulfi@gmail.com
			</a>

			<h4>Address</h4>
			<p>Jl Raya Condet, Balekambang, Kramat Jati, Jakarta Timur 13530</p>
		</motion.div>
	)
}

export default Contact
