import React, { useState } from "react";
import "../styles/Login.css";
import { auth } from "../firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Login() {
	const [name, setName] = useState("");
	const [photoUrl, setPhotoUrl] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	const signin = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userAuth) => {
				if (userAuth) {
					dispatch(
						login({
							email: userAuth.email,
							uid: userAuth.uid,
							displayName: userAuth.displayName,
							photoUrl: userAuth.photoURL,
						})
					);
				}
			})
			.catch((error) => alert(error.message));
	};

	const register = () => {
		// e.preventDefault()
		createUserWithEmailAndPassword(auth, email, password)
			.then((userAuth) => {
				console.log(auth.currentUser);
				if (userAuth) {
					updateProfile(auth.currentUser, {
						displayName: name,
						photoURL: photoUrl,
					}).then(() => {
						dispatch(
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: userAuth.user.displayName,
								photoUrl: userAuth.user.photoURL,
							})
						);
					});
				}
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="login">
			<img
				src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png"
				alt=""
			/>
			<form>
				<input
					required
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Fullname (required if registering)"
				/>
				<input
					value={photoUrl}
					onChange={(e) => setPhotoUrl(e.target.value)}
					type="text"
					placeholder="Profile pic URL (optional)"
				/>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<button type="submit" onClick={signin}>
					Sign In
				</button>
			</form>

			<p>
				Not a member?{" "}
				<span onClick={register} className="login__register">
					Register Now
				</span>
			</p>
		</div>
	);
}

export default Login;
