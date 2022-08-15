import React, { useState, useEffect} from "react";
import { Editor } from "@tinymce/tinymce-react";
import { v4 as uuidv4 } from 'uuid';
import "./write.css"
import { Amplify } from 'aws-amplify';

import '@aws-amplify/ui-react/styles.css';
import awsExports from "../../aws-exports.js"
import axios from 'axios'

Amplify.configure(awsExports)
const baseURL = "https://9q00gfj17d.execute-api.eu-west-2.amazonaws.com/dev/create/"

export default function Write() {
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [image_location, setImageLocation] = useState("")
  const [file, setFile] = useState(null)
  const [url, setUrl] = useState("")
  const [field,setField] = useState({})
  const filename = uuidv4()
  
  useEffect(() => {
    axios.get(`https://9q00gfj17d.execute-api.eu-west-2.amazonaws.com/dev/generate`,{params:{
  'image_name': filename}}).then(res =>{
    setUrl( res?.data.url)
  setField(res?.data.fields)
  setImageLocation(filename)

  })
  
  },[] )
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      text,
      image_location
    }
    
    if (file){
      const form = new FormData()
      Object.keys(field).forEach(key => form.append(key, field[key]));
      form.append('file',file)
      try {
        await axios.post(url,form)
      } catch (error) {
      }
    }
    try {
      await axios.post(baseURL, newPost, {
      })
      window.location.replace("/blog/");

      
    } catch (error) {
      
    }
    
  }
  

  return (
    <div className="write">
      {file && <img className="writeImg"
      src={URL.createObjectURL(file)}
      alt="">
      </img>}
        <form className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fas fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} onChange={e=> setFile(e.target.files[0])}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true} onChange={e=> setTitle(e.target.value)}/>
            </div>
            
            <div className="writeRichText">
            <Editor
              value={text}
               init={{
               height: 500,
                menubar: false
                  }}
                 onEditorChange={e => setText(e)}
                />
              </div>
           <button className="writeSubmit" type="submit">Publish</button>
        </form>
    </div>
  )
}


