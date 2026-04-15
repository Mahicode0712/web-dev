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
        <h3>{this.state.count}</h3>
        <button className={style.btn} onClick={this.handleClick}>
          Increment
        </button>
        <button className={style1.btn} onClick={this.handleDecrement}>
          Decrement
        </button>
        <Button>FIRST</Button>
        <Button styled="">Submit</Button>
      </div>
    );
  }


export default Article;


const Button1=styled.button`
background-color: ${props=>props.yellow ? "yellow" : "red"};  
color: white;
width: 100px;
height: 30px;
`

const Button=styled.button`
background-color: ${props=>props.styled ? "green" : "blue"};  
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
 