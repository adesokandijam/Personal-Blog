import Header from "../../components/header/Header"
import Post from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import React from "react";
import "./home.css"

export default function Home() {
  return (
    <>
    <Header/>
    <div className="home">
      <Post/>
      <Sidebar/>
    </div>
        </>
  )
}
