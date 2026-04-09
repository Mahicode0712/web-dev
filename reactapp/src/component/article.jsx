import React from "react"
function Article(props){
    const [count,setCount]=React.useState(0)

    const handleIncrement=()=>{
        setCount(count+1)
    }
    return(
        <div>
            <h1>article</h1>
            <h3>{props.title}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit culpa aut eum ullam maxime voluptates aperiam sed. Corporis tempore optio nemo architecto iste rerum facilis ducimus, porro consequuntur dolore labore!</p>
            <h2>{count}</h2>
            <button onClick={handleIncrement}>Increment</button>
            {/*<button onclick={handleIncrement}>decrement</button>*/   }
        </div>
    )
} 