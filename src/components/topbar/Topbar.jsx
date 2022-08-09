import React from "react";
import { Link } from "react-router-dom";
import './topbar.css'

export default function Topbar() {
    const user = false;
  return (
    <div className='top'>
        <div className='topLeft'>
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-linkedin"></i>
            <i className="topIcon fa-brands fa-square-snapchat"></i>
            </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'>
                    <Link to={"/"} className="link"> HOME</Link>
                </li>
                <li className='topListItem'>
                    <Link to={"/"} className="link"> ABOUT</Link>
                </li>
                <li className='topListItem'>
                    <Link to={"/"} className="link">CONTACT</Link>
                </li>
                <li className='topListItem'>
                    <Link to={"/"} className="link">{user && "WRITE"}</Link>
                </li>
                <li className='topListItem'>
                    <Link to={"/"} className="link">{user && "LOGOUT"}</Link>
                </li>
            </ul>
        </div>
        <div className='topRight'>
            {
                user ? (
                    <img className='topImage'
            src="data:image/jpeg;base64,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"
            alt="">
            </img>
                ) : (
                    <>
                    <Link to={"/login"} className="link">{user && "LOGIN"}</Link>
                    </>
                )
            }
            
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
