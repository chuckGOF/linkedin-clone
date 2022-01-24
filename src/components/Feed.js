import React, { useState, useEffect } from "react";
import "../styles/Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import IconOption from "./IconOption";
import Post from "./Post";
import { db } from "../firebase";
import {
	addDoc,
	collection,
	query,
	orderBy,
	onSnapshot,
	serverTimestamp,
} from "firebase/firestore";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import FlipMove from "react-flip-move";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";

function Feed() {
	const user = useSelector(selectUser);
	const [input, setInput] = useState("");
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const queryDoc = async () => {
			const postsQuery = query(
				collection(db, "posts"),
				orderBy("timestamp", "desc")
			);

			onSnapshot(postsQuery, (snapshot) => {
				setPosts(
					snapshot.docs.map((doc) => ({
						pid: doc.id,
						data: doc.data(),
					}))
				);
			});
			// onSnapshot(postsQuery, (snapshot) => {
			// 	setPosts(snapshot.docs.map((snap) => snap.data()));
			// });
		};
		queryDoc();
	}, []);

	const sendPost = async (e) => {
		e.preventDefault();
		const postCollection = collection(db, "posts");
		await addDoc(postCollection, {
			name: user?.displayName,
			description: user?.email,
			message: input,
			photoUrl: user?.photoUrl || "",
			timestamp: serverTimestamp(),
		});

		setInput("");
	};

	return (
		<div className="feed">
			<div className="feed__inputContainer">
				<div className="feed__input">
					<CreateIcon />
					<form>
						<input
							value={input}
							onChange={(e) => setInput(e.target.value)}
							type="text"
						/>
						<button onClick={sendPost} hidden type="submit">
							Send
						</button>
					</form>
				</div>

				<div className="feed__inputOption">
					<IconOption
						Icon={ImageIcon}
						title="Photo"
						color="#70B5F9"
					/>
					<IconOption
						Icon={SubscriptionsIcon}
						title="Video"
						color="#e7a33e"
					/>
					<IconOption
						Icon={EventNoteIcon}
						title="Event"
						color="#c0cbcd"
					/>
					<IconOption
						Icon={CalendarViewDayIcon}
						title="Write Article"
						color="#7fc15e"
					/>
				</div>
			</div>

			{/* {posts.map((post, index) => (
				<Post
					key={post.id}
					name={post.data.name}
					description={post.data.description}
					message={post.data.message}
				/>
			))} */}
			<FlipMove>
				{posts.map(
					// using destructuring method
					({
						pid,
						data: { name, description, message, photoUrl },
					}) => (
						<Post
							key={pid}
							name={name}
							description={description}
							message={message}
							photoUrl={photoUrl}
						/>
					)
				)}
			</FlipMove>
		</div>
	);
}

export default Feed;
