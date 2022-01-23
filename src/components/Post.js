import React from "react";
import "../styles/Post.css";
import { Avatar } from "@mui/material";
import IconOption from "./IconOption";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src="" />
        <div className="post__info">
          <h2>Fadeel Gbaiye</h2>
          <p>Description</p>
        </div>
      </div>

      <div className="post__body">
        <p>Message goes here</p>
      </div>

      <div className="post__buttons">
        <IconOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <IconOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <IconOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <IconOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;
