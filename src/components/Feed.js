import React, { useState, useEffect } from "react";
import "../styles/Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import IconOption from "./IconOption";
import Post from "./Post";
import { db } from "../firebase";
import {
  doc,
  setDoc,
  getDocs,
  collection,
  query,
  // orderBy,
  serverTimestamp
} from "firebase/firestore";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const queryDoc = async () => {
      const postsQuery = query(
        collection(db, "posts")
        // orderBy("created", "desc")
      );
      const querySnapshot = await getDocs(postsQuery);
      querySnapshot.forEach((snap) => {
        console.log(snap.data());
        setPosts((prevState) => [...prevState, snap.data()]);
      });
    };
    queryDoc();
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();
    const post = {
      name: "Fadeel Gbaiye",
      description: "this is a test",
      message: input,
      photoUrl: "",
      timestamp: serverTimestamp()
    };

    const postRef = doc(db, "posts/data");
    const p = await setDoc(postRef, post);

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
          <IconOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <IconOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
          <IconOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <IconOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7fc15e"
          />
        </div>
      </div>

      {posts.map((post) => (
        <Post
          name={post.name}
          description={post.description}
          message={post.message}
        />
      ))}
    </div>
  );
}

export default Feed;
