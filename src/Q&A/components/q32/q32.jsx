import React from 'react';
import "./q32.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q32() {
    return (
        <>

            <div className='lmain-div_q32'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q32'>
                    <div className='main-head_q32'>Can I use two mobile phones to log in with one robot account?</div>

                    <span className="main-span_q32">Q: Can I use two mobile phones to log in with one robot account?</span><br /><br />
                    <span className="main-span_q32">A: It is not recommended to avoid errors caused by asynchronous operations.</span><br /><br />

                </div>

            </div>
        </>
    )
}

export default q32