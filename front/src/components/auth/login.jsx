import React from "react"
import { useAlert } from "react-alert"
import { useState, useEffect } from "react"
import { login } from "../../../http/auth"
import { useNavigate } from "react-router-dom"

import { Link } from "react-router-dom"

const initialState = {
	role: "donor",
	email: "",
	password: "",
}

function Login({ auth, setAuth }) {
	const alert = useAlert()
	const navigate = useNavigate()

	const [values, setValues] = useState(initialState)
	const handleChange = e => {
		setValues({ ...values, [e.target.name]: e.target.value })
		//console.log("Handlechange", filter);
	}

	useEffect(() => {
		if (auth.isauthed) {
			if (auth.role == "donor") {
				navigate("/editdonor")
			} else {
				navigate("/editorg")
			}
		}
	}, [auth.isauthed])

	const onSubmit = e => {
		e.preventDefault()
		const { role, email, password } = values
		if (!email || !password) {
			alert.show("MISSING FIELD!")
			return
		}
		login(values)
			.then(res => {
				console.log(res.data)

				alert.show("LOGGED IN.")
				setAuth({ isauthed: true, role: res.data.role, loading: false })
				setValues(initialState)
			})
			.catch(e => {
				// console.log(e)
				setAuth({ ...auth, isauthed: false })
				alert.show(
					e?.response?.data?.error
						? e.response.data.error
						: "FAILED TO LOGIN."
				)
			})
	}

	return (
		<div className="grid grid-rows-1 mt-20">
			<div className="bg-bg1 flex justify-center mx-[20%]">
				<form className="max-w-[400px] w-full mx-auto rounded-lg bg-[#850000] p-8 px-8">
					<h2 className="text-4xl text-txt1 font-bold text-center pb-4">
						LOGIN
					</h2>
					<label className="text-txt1">Select your role.</label>
					<select
						name="role"
						onChange={handleChange}
						value={values.role}
						className="bg-bg3 mt-2 p-2  text-txt2 rounded-lg  block w-full placeholder-gray-400  "
					>
						<option>Blood groups</option>
						<option value="donor">Donor</option>
						<option value="org">Organization</option>
					</select>

					<div className="flex flex-col text-txt1 py-2">
						<label>Email</label>
						<input
							className="rounded-lg bg-txt1 mt-2 p-2 text-txt2  focus:bg-bgfocus  focus:outline-none focus:text-txt1"
							type="text"
							name="email"
							value={values.email}
							onChange={handleChange}
						/>
					</div>
					<div className="flex flex-col text-txt1 py-2">
						<label>Password</label>
						<input
							className="p-2 rounded-lg bg-txt1 mt-2  text-txt2  focus:bg-bgfocus  focus:outline-none focus:text-txt1"
							type="password"
							name="password"
							value={values.password}
							onChange={handleChange}
						/>
					</div>

					<button
						className="w-full mt-4 my-3 py-2 bg-button1 shadow-lg shadow-gray-900/50 hover:shadow-gray-500/40 text-white font-semibold rounded-lg"
						onClick={onSubmit}
					>
						LOGIN
					</button>
					<div className="flex gap-2 justify-center">
						<p className=" text-slate-400">New here? </p>
						<p className=" underline text-slate-400 ">
							<Link to="/regdonor">Sign up.</Link>{" "}
						</p>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login
