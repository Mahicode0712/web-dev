import  React from "react";


function Contact(){
    const [name, setName]=React.useState("")
    const [email, setEmail]=React.useState("")
    const [message, setMessage]=React.useState("")


    const handleSubmit=()=>{}
    return(
        <div>
            <h1>Contact Us</h1>
            <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <textarea placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Contact