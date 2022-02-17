import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";


import Title from "./Components/Title";
import Date from "./Components/Date";
import Img from "./Components/Img"


import {baseUrl, apiKey, imgUrl} from './constants'
import Paragraph from "./Components/Paragraph";

import styled from "styled-components";

const StyledBody = styled.div`

div{
  background-color: ${props => props.theme.lightpink}
}



`

function App() {

  const [title, setTitle] = useState('')
  
  const [date, setdate] = useState('');
  const [explanation, setExplanation] = useState('')

useEffect(()=>{

  axios.get(`${baseUrl}?api_key=${apiKey}`)
  .then(res =>{
    console.log(res.data)
    setTitle(res.data.title)
    setdate(res.data.date)
    setExplanation(res.data.explanation)
  })
  .catch(err=> console.error(err))

}, [])





  return (
    <StyledBody className="App">
      

      <Title title = {title}/>
      <Date date = {date}/>
      <Img imgUrl = {imgUrl}/>
      <Paragraph explanation = {explanation}/>
     
    </StyledBody>
  );
}

export default App;
