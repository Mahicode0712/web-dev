import React from 'react'

function homepage() {
    const loggedIn = true;
    // if (loggedIn){
    //     return (
    //         <button>Logout</button>
    //     )
    // }else{
    //     return(
    //         <button>Login</button>
    //     )
    // }
    //ternary operator
    return ( 
        loggedIn ? <button>Logout</button> : <button>Login</button>
     )
}
export default homepage