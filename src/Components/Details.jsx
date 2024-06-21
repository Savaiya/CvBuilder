import React, { useState } from "react";
import { Form } from "./Detailcomp/Form";

export default function Details({sendData}){
   
    function handleDatachild(data) {
        sendData(data);
    }

    return(
        <div className="w-1/2 bg-green-300 flex justify-center items-center">
           <Form sendData = {handleDatachild}/>
        </div>
    )
};