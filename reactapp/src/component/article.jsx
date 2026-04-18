import React, { useState } from "react";
import style from "../CSS/Article.module.css";
import style1 from "../CSS/Homepage.module.css";
//import styled from "styled-components"
import styled from "@emotion/styled"
import { css } from '@emotion/react'


function Article(props) {
  const [count, setCount]=useState(0)
  
  const handleIncrement=()=>{
    setCount(count+1)
  }
   return (
      <div>
        <h1>Article</h1>
        <h3>{props.title}</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio itaque expedita soluta ex rerum quaerat libero nulla obcaecati impedit maiores ratione deserunt beatae ipsa aliquid ab, laboriosam dicta temporibus earum.</p>
        <h2>{count}</h2>
        <button className={style.btn} onClick={handleIncrement}> Increment </button>
        <button className={style1.btn} onClick={()=>setCount(count-1)}>
          Decrement
        </button>
        <Button> FIRST </Button>
        <Button lightgreen margin-20 > Submit </Button>

        <Button className= 'bg-pink text-black h-10 border-3 border-wheat p-5'>Tailwind Button</Button>
      </div>
    );
  }


export default Article;

const Button=styled.button`
background-color: ${props => props.lightgreen ? "lightgreen" : "red"};  
color: white;
width: 100px;
height: 30px;
`


// import React from 'react'
// import { add as addition } from '../utility'

// class Article extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       name: "Alex",
//     };
//     //   console.log(addition(2,3))
//   }

//   componentDidMount() {
//     console.log("componentDidMount");
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     if (nextState.count === 1) return false;
//     console.log("shouldComponentUpdate");
//     return true;
//   }

//   componentDidUpdate() {
//     console.log("componentDidUpdate");
//   }

//   componentWillUnmount() {
//     console.log("componentWillUnmount");
//   }

//   handleClick = () => {
//     // this.state.count=this.state.count+1
//     // console.log(this.state.count)
//     this.setState({ count: this.state.count + 1 });
//   };

//   handleDecrement = () => {
//     this.setState({ count: this.state.count - 1 });
//   };
 