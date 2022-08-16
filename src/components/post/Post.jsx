import React from "react";
import { Link } from "react-router-dom";
import "./post.css"

export default function Post
({post}) {
  return (
    <div className='post'>
      <div className="postInfo">
      <span className="postDate">{post.date.S}</span>
        <Link to={`/post/${post.id.S}`}>
        <span className="postTitle" > {post.title.S}</span>
        </Link>
      </div>
    </div>
  )
}
