import React from "react";
import "../styles/Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import IconOption from "./IconOption";
import ImageIcon from '@mui/icons-material/Image'

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button hidden type="submit">
              Send
            </button>
          </form>
        </div>

        <div className="feed__inputOption">
          <IconOption Icon={ImageIcon}title='Photo' color='#70B5F9'/>
          <IconOption />
          <IconOption />
          <IconOption />
        </div>
      </div>
    </div>
  );
}

export default Feed;
