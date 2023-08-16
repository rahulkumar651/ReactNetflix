import React from "react";
import ReactDOM from 'react-dom';
import Card from "./Cards";
import Sdata from "./Sdata";
import './index.css';



function ncard(val){
  console.log(val);
  return (
    <Card 
    imgsrc= {val.imgsrc}
    sanme={val.sanme}
    title={val.title}
    link={val.link}
    />

  );
}




ReactDOM.render(
  <>
  <h1 className="heading_style">List of top  Netflix Series</h1>
   
  {Sdata.map(ncard)};
  </>
 
  ,document.getElementById("root")
);