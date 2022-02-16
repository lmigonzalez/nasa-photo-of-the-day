import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";


import Title from "./Components/Title";
import Date from "./Components/Date";
import Img from "./Components/Img"


import {baseUrl, apiKey, imgUrl} from './constants'
import Paragraph from "./Components/Paragraph";

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
    <div className="App">
      

      <Title title = {title}/>
      <Date date = {date}/>
      <Img imgUrl = {imgUrl}/>
      <Paragraph explanation = {explanation}/>
     
    </div>
  );
}

export default App;
