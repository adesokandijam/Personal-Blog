import React, {useEffect,} from "react";
import { useLocation } from "react-router-dom";
import "./singlePost.css"
import axios from 'axios'
import { useState } from "react";
const baseURL = "https://9q00gfj17d.execute-api.eu-west-2.amazonaws.com/dev/post/"

export default function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split('/')[2]
    console.log(path)

    const [post,setPost]  = useState()

    useEffect(() =>{
        const getPost = async () => {
            const res = await axios.get(baseURL+path)
            setPost( await res.data)
            console.log(post)
        }
        getPost();
    },[path]);
    const data = post?.text.S;
    console.log(data)
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img className="singlePostImg"
            src={post?.image_location.S}
            alt=""
            />
        <h1 className="singlePostTitle">{post?.title.S}
            <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
            
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>{post?.author.S}</b></span>
            <span className="singlePostDate">{post?.date.S}</span>
        </div>
        <div className="singlePostDesc"
        dangerouslySetInnerHTML={{__html:data}}/>
        </div>
    </div>
  )
}
