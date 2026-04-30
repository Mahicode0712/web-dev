import  React, {useState} from "react";
import { Navigate } from "react-router-dom";

function Contact(){
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [message, setMessage]=useState("")


    const handleSubmit=(data)=>{
        event.preventDefault();
        if (!email.endsWith("krmu.edu.in")){
            alert("Please enter a valid email address")
            return;
        }
       
    }
       console.log(data)
       console.log(name, email, message)
       Navigate("/")
    }
    return(
        <div>
           <form onSubmit={()=>handleSubmit("Sample string")}>
            <h1>Contact Us</h1>
            <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <textarea placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
            <button type="submit">Submit</button>
            </form>
        </div>
        
    )


export default Contact