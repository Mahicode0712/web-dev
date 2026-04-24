import  React, {useState} from "react";


function Contact(){
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [message, setMessage]=useState("")


    const handleSubmit=(data)=>{
        event.preventDefault();

    if(!name || !email || !message){
        alert("Please fill in all fields")
        return;
    }
       console.log(data)
       console.log(name, email, message)

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Contact Us</h1>
            <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <textarea placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
            <button type="submit">Submit</button>
            </form>
        </div>
        
    )
}

export default Contact