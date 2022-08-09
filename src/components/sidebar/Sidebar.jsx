import React from "react";
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhMe1y48aMb9BBUoEBDdVPFBZTGHO6fAp8pg&usqp=CAU"/>
            <p>
            Together, we can get Wisconsin back on the right track. Tony Evers has been a disaster. From Covid to Kenosha his instincts have been terrible, and his policies even worse. Help is on the way. I ask for your vote on August 9th
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Cinema</li>
                <li className="sidebarListItem">Tech</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-linkedin"></i>
            <i className="sidebarIcon fa-brands fa-square-snapchat"></i>
            </div>
        </div>
    </div>
  )
}
