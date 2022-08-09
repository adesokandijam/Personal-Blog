
import React from "react";
import './header.css'

export default function Header() {
  return (
    <div className='header'>
    <div className='headerTitles'>
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
    </div>
    <img className='headerImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORvg2MWXEJ2QJM9XXiOJFtTIi9uHZH0zpdw&usqp=CAU"/>
    </div>
  )
}
