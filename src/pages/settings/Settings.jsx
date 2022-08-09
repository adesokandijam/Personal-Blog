import './settings.css'
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className='settings'>
        <div className='settingsWrapper'>
          <div className='settingsTitle'>
            <span className='settingsUpdateTitle'>Update Your Account</span>
            <span className='settingsDeleteTitle'>Delete Your Account</span>
          </div>
          <form className='settingsForm'>
            <label>Profile Picture</label>
            <div className='settingsPP'>
              <img className='' src='https://media.istockphoto.com/photos/perfect-sky-and-ocean-picture-id467367026?k=20&m=467367026&s=612x612&w=0&h=HBytXxkz31s-ZQrTwH3pbCy51Ep0SRScSXkChSUhYWk='></img>
              <label htmlFor='fileInput'>
              <i className="settingsPPIcon fa-solid fa-user"></i>
              </label>
              <input type="file" id="fileInput" style={{display:"none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder='Abdulmajid'/>
            <label>Email</label>
            <input type="text" placeholder='adesokanmajid@gmail.com'/>
            <label>Password</label>
            <input type="text"/>
            <button className='settingsSubmit'>Update</button>
          </form>
        </div>
        <Sidebar/>
    </div>
  )
}
