import React from 'react'

function Article(props) {
  return (
    <div>
      <h1>Article</h1>
       <h3>{props.title}</h3> 
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eligendi fugiat pariatur eos quibusdam ratione possimus adipisci, impedit, autem ad quo, et cum laudantium deleniti. Soluta molestias amet quas labore.</p>
    </div>
  )
}

export default Article

import React from 'react'
function Article(props) {
  const[count,setCount]=React.useState(0)
  const hamdleIncrement=()=>{
    setCount(count+1)
  }
  
// import { add as addition } from '../utility'

class Article extends React.Component {
    constructor(props) {
      super(props)
      this.state={
        count:0,
        name:"Mahi"
      }       // console.log(addition(2,3))
    }

    // componentDidMount(){
    //     console.log("Component Mounted")
    // }

    shouldComponentUpdate(nextProps,nextState){
        console.log("Should component update")
        return true
    }

    componentDidUpdate(){
        console.log("Component Updated")
    }

    handleClick=()=>{
        // this.state.count=this.state.count+1
        // console.log(this.state.count)
        this.setState({count: this.state.count+1})
    }
    handleDecrement=()=>{
        this.setState({count: this.state.count-1})
    }
  render() {
    return (
      <div>
        <h1>Article</h1>
        <h3>{this.state.count}</h3>
        <h3>{this.state.name}</h3>
        <h3>{props.title}</h3>
        
         <p>.</p> 
         <h2>{count}</h2>
         <button onClick={handleIncrement}>Increment</button>
         
         <button onClick={this.handleClick}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button> 
        <h3>{this.props.title}</h3>  
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eligendi fugiat pariatur eos quibusdam ratione possimus adipisci, impedit, autem ad quo, et cum laudantium deleniti. Soluta molestias amet quas labore.</p>
      </div>
    )
  }
 }
}
export default  Article

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
export default Article