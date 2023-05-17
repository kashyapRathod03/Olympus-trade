import React from 'react';
import  './MainHelp.css'
import { useNavigate } from "react-router-dom";

function Userguide() {
    const nevigate = useNavigate();
    return (
        <>
            <div className='mainhelp-div'>
                <ul>
                    <li onClick={() => nevigate('/')} className='mainhelp-list'>HELP CENTER</li>
                    <hr/><br/>
                    <ol className='help-ol-list'>
                        <li className="help-ol-child" onClick={() => nevigate('/Userguide')}>Userguide</li><br/><hr/><br/>
                        <li className="help-ol-child" onClick={() => nevigate('/announcement')}>Latest Announcement</li><br/><hr/><br/>
                        <li className="help-ol-child" onClick={() => nevigate('/que and ans')}>Olympuse Trade Q&A</li><br/><hr/><br/>
                    </ol>
                </ul>
            </div>
        </>
    )
}

export default Userguide
