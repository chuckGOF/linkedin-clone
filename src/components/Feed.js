import React, { useState, useEffect } from "react";
import "../styles/Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import IconOption from "./IconOption";
import Post from "./Post";
import { db } from "../firebase";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        }))
      );
    });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add();
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
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

      <Post />
    </div>
  );
}

export default Feed;
