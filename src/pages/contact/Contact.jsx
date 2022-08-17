import React, {useState}from 'react'
import './contact.css'
import axios from 'axios'
const baseURL = "https://9q00gfj17d.execute-api.eu-west-2.amazonaws.com/dev/contact/"

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newMessage = {
            name,
            email,
            message
        }

        try {
            await axios.post(baseURL, newMessage,{})
        } catch (error) {
            
        }
    }

  return (
    <div className='contact'>
        <h1 className='contactText'>Contact Me</h1>
        <text className='contactSubText'>Let me know if you have any feedback, comments or projects that you might need my input and expertise</text>
        <form className='contactForm' onSubmit={handleSubmit}>
            <input type='text' placeholder='Name' className='contactFormName' onChange={e => setName(e.target.value)}></input>
            <input type='email' placeholder='Email' className='contactFormEmail' onChange={e => setEmail(e.target.value)}></input>
            <textarea  placeholder='Enter your message' className='contactFormMessage' onChange={e => setMessage(e.target.value)}></textarea>
            <button className='contactFormSubmit'>Submit</button>
        </form>
    </div>
  )
}
