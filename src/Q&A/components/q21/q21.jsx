import React from 'react';
import "./q21.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q21() {
    return (
        <>

            <div className='lmain-div_q21'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q21'>
                    <div className='main-head_q21'>I can't log in to Royal Q</div>

                    <span className="main-span_q21">Q: I cannot log in to Royal Q</span><br /><br />
                    <span className="main-span_q21">A: Please log out and log in again or close the app and restart</span><br /><br />

                </div>

            </div>
        </>
    )
}

export default q21