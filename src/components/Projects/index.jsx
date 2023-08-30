import React, { useState, useEffect } from "react"
import styles from "./style"
import { motion } from "framer-motion"
import axios from "axios"

import { Icon } from "@iconify/react"
import moment from "moment"
import "moment/locale/id"
moment.locale("id")

export const Project = () => {
	const classes = styles()
	const date = new Date(Date.now())

	const [dataUser, setDataUser] = useState({
		nama: "",
		email: "",
		komentar: "",
		date: date,
	})

	const [commentLength, setCommentLength] = useState(0)

	const [users, setUsers] = useState([])

	const getUser = async () => {
		const response = await axios.get(
			"https://server-auliarahmanzulfi.herokuapp.com/users"
		)
		console.log(response.data)
		setCommentLength(response.data.length)
		setUsers(response.data)
	}

	const saveUser = async (e) => {
		e.preventDefault()
		try {
			if (dataUser.nama.length === 0) dataUser.nama = "Anonymous"

			await axios.post(
				"https://server-auliarahmanzulfi.herokuapp.com/users",
				dataUser
			)
			setDataUser({
				nama: "",
				email: "",
				komentar: "",
			})
			alert("Thank you for your comment")
			window.location.reload()
		} catch (err) {
			console.log(err)
		}
	}

	const deleteUser = async (id) => {
		try {
			await axios.delete(
				`https://server-auliarahmanzulfi.herokuapp.com/users/${id}`
			)
			getUser()
		} catch (err) {
			console.log(err)
		}
	}

	useEffect(() => {
		getUser()
	}, [])

	return (
		<motion.div
			initial={{ width: 0 }}
			animate={{ width: "100%" }}
			exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
		>
			<div className={classes.projects}>
				<div
					className={classes.project}
					onClick={() =>
						window.open(
							"https://github.com/uchihahah/OOP-Term-Project-Crymlll"
						)
					}
				>
					<h4>Bank Management System</h4>
					<img
						className={classes.img}
						src={`${process.env.PUBLIC_URL}/project-1.png`}
						alt="profile"
					/>
					<h6>2021 - Project Lead / Back-end Programmer</h6>
					<p>Use Framework Flask with MySQL database</p>
					<p>For Object Oriented Programming Course</p>
				</div>
				<div
					className={classes.project}
					onClick={() =>
						window.open(
							"https://github.com/Team7x/Database-Term-Project"
						)
					}
				>
					<h4>Freight Forwarding Software</h4>
					<img
						className={classes.img}
						src={`${process.env.PUBLIC_URL}/project-2.png`}
						alt="profile"
					/>
					<h6>2021 - Back-end Lead</h6>
					<p>Use Framework Flask with MySQL database</p>
					<p>For Database Course</p>
				</div>
				<div
					className={classes.project}
					onClick={() =>
						window.open("https://github.com/Crymlll/DestariaMC")
					}
				>
					<h4>Crymlll Discord Bot</h4>
					<img
						className={classes.img}
						src={`${process.env.PUBLIC_URL}/project-3.png`}
						alt="profile"
					/>
					<h6>2020 - Solo Project</h6>
					<p>Use NodeJS (runtime JavaScript)</p>
					<p>For Destaria Minecraft Server with over 500+ users</p>
				</div>
				<div
					className={classes.project}
					onClick={() =>
						window.open(
							"https://github.com/Crymlll/IF3028-TUBESPEMWEB-RA-RC-2021"
						)
					}
				>
					<h4>Simple Lapor</h4>
					<img
						className={classes.img}
						src={`${process.env.PUBLIC_URL}/project-4.png`}
						alt="profile"
					/>
					<h6>2021 - Fullstack / Project Lead</h6>
					<p>Use Laravel with MySQL database</p>
					<p>For PEMWEB Course</p>
				</div>
				<div
					className={classes.project}
					onClick={() =>
						window.open(
							"https://github.com/Crymlll/darma-bangsa-news"
						)
					}
				>
					<h4>Darma Bangsa News</h4>
					<img
						className={classes.img}
						src={`${process.env.PUBLIC_URL}/project-5.png`}
						alt="profile"
					/>
					<h6>2022 - Fullstack </h6>
					<p>
						Use React Native (Client) / React JS (Admin) with
						Firebase
					</p>
					<p>For PTI Course / SMA Darma Bangsa</p>
				</div>
				<div
					className={classes.project}
					onClick={() =>
						window.open("https://github.com/Crymlll/Tubes-PWL")
					}
				>
					<h4>HealthyMed</h4>
					<img
						className={classes.img}
						src={`${process.env.PUBLIC_URL}/project-6.png`}
						alt="profile"
					/>
					<h6>2022 - Backend Developer </h6>
					<p>Use Laravel with SQLite</p>
					<p>For PWL Course</p>
				</div>

				<div
					className={classes.project}
					onClick={() =>
						window.open(
							"https://github.com/Crymlll/bs-frontend-website"
						)
					}
				>
					<h4>Bang Salam - Mobile</h4>
					<img
						className={classes.img}
						src={`${process.env.PUBLIC_URL}/project-7.png`}
						alt="profile"
					/>
					<h6>2022 - Frontend Developer </h6>
					<p>Use React Native with MySQL</p>
					<p>For Purino LHS</p>
				</div>

				<div
					className={classes.project}
					onClick={() =>
						window.open(
							"https://github.com/Crymlll/bs-frontend-website"
						)
					}
				>
					<h4>Bang Salam - Website</h4>
					<img
						className={classes.img}
						src={`${process.env.PUBLIC_URL}/project-8.png`}
						alt="profile"
					/>
					<h6>2022 - Frontend Developer </h6>
					<p>Use ReactJS with MySQL</p>
					<p>For Purino LHS</p>
				</div>
				<div
					className={classes.project}
					onClick={() =>
						window.open("https://github.com/Crymlll/dishub")
					}
				>
					<h4>Analisis dan Pemetaan Kepegawaian</h4>
					<img
						className={classes.img}
						src={`${process.env.PUBLIC_URL}/project-9.png`}
						alt="profile"
					/>
					<h6>2023 - Fullstack Developer </h6>
					<p>Use ReactJS with MySQL</p>
					<p>For Dinas Perhubungan Provinsi Lampung</p>
				</div>
			</div>

			{/* <div className={classes.bottom}>
				<h4>Leave a Comment</h4>
				<form onSubmit={saveUser} className={classes.form}>
					<input
						className={classes.input}
						type="text"
						placeholder="Name (Optional)"
						value={dataUser.nama}
						onChange={(e) => {
							setDataUser({ ...dataUser, nama: e.target.value })
						}}
					/>
					<input
						className={classes.input}
						type="email"
						placeholder="Email"
						value={dataUser.email}
						onChange={(e) => {
							setDataUser({ ...dataUser, email: e.target.value })
						}}
						required
					/>
					<textarea
						className={classes.textarea}
						placeholder="Message"
						value={dataUser.komentar}
						onChange={(e) => {
							setDataUser({
								...dataUser,
								komentar: e.target.value,
							})
						}}
						required
					/>
					<button type="submit" className={classes.button}>
						Send
					</button>
				</form>
			</div> */}
			{/* <div className={classes.commentSection}>
				<h4>Comments ({commentLength})</h4>
				{users.map((user, index) => (
					<div key={user._id} className={classes.comment}>
						<div className={classes.commentProfile}>
							<Icon
								className={classes.userIcon}
								icon="gridicons:user-circle"
								width={50}
								height={50}
							/>
						</div>

						<div className={classes.commentBody}>
							<div className={classes.textCommentHead}>
								<p className={classes.textComment}>
									<b>{user.nama}</b>
								</p>
								<p className={classes.textDate}>
									{moment(user.date).format("D MMMM YYYY")}
								</p>
								<Icon
									onClick={() => deleteUser(user._id)}
									className={classes.deleteIcon}
									icon="mdi:delete"
								/>
							</div>
							<p className={classes.textComment}>
								{user.komentar}
							</p>
						</div>
					</div>
				))}
			</div> */}
		</motion.div>
	)
}

export default Project
