import React, {useState, useEffect} from 'react'
import Posts from '../../components/posts/Posts'
import axios from "axios"

const baseURL = "https://9q00gfj17d.execute-api.eu-west-2.amazonaws.com/dev/posts/"

export default function Blog() {
  const [posts,setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await  axios.get(baseURL);
      setPosts(res.data)
    }

    fetchPosts();
  },[]);
  return (
    <div>
        <Posts posts ={posts}/>
    </div>
  )
}
