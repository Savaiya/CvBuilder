import React,{useRef} from "react";
import Details from "./Components/Details";
import Preview from "./Components/Cvpreview";
import "./App.css";
import { func } from "prop-types";
import { useState } from "react";

function App() {

  const [Data,setData] = useState({})
  function handleData(data){
    setData(data);
    console.log(data);
  }

  return (
    <>
      <div className="w-screen h-screen flex">
        <Details sendData = {handleData}/>
        <Preview Data={Data}/>
      </div>
    </>
  );
}
export default App;
