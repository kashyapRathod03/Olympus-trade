import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Option.css";

function Option() {
    const nevigate = useNavigate();

  return (
   <>
        <span className='option-spanh1' onClick={() => nevigate('/')}>HELP CENTER</span>
   <div className="option-main">
        <span className='option-span' onClick={() => nevigate('/Userguide')}><pre>USERGUIDE</pre></span>
        <span className='option-span' onClick={() => nevigate('/announcement')}><pre>LATESTANNAOUNCEMENT</pre></span>
        <span className='option-span' onClick={() => nevigate('/que and ans')}><pre>OLYMPUSTRADE-Q&A</pre></span>
   </div>


   </>
  )
}

export default Option
