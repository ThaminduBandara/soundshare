
import React from "react";
import "./profilepost.css";
import { FaPlay } from "react-icons/fa";

export default function Profilepost({ post }) {
  return (
    <div
      className="profilepost"
      style={{ backgroundImage: `url(${post.selectedPFile})` }}
    >
      <div className="overlay">
        <FaPlay className="play-icon" />
        <p className="post-name">{post.title}</p>
      </div>
       
    </div>
  );
}
