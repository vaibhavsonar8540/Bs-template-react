import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Template = () => {
  return (
    <div className='row d-flex' style={{width:"850px",height:"410px", margin:"auto"}}>
        
         <div style={{width:"500px" }}>
                 <h1>Hi , Hi , i'm John Deo. </h1>
                 <p style={{fontFamily:"sans-serif"}}>A freelance web developer from london . I convert custom web designs to bootstrap templates . </p>
                 <p style={{fontFamily:"sans-serif"}}>I make YouTube videos and write Blog</p><br /><br />
                 <button style={{backgroundColor:"skyblue",padding:"8px 15px" , color:"white" , borderRadius:"20px", fontWeight:"bold"}}>I'M AVAILABLE</button>
         
                 <div className="icon mt-4 d-flex gap-3">
         <FaFacebook size={20} color="#6c757d" />
         <FaTwitter size={20} color="#6c757d" />
         <FaLinkedin size={20} color="#6c757d" />
         <FaGithub size={20} color="#6c757d" />
         </div>
             </div>
             <div style={{width:"350px"}}>
            <img src="src/assets/ss.png" alt="" />
         </div>
    </div>
  )
}

export default Template