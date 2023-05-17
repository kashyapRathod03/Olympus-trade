import React from 'react';
import "./q30.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q30() {
    return (
        <>

            <div className='lmain-div_q30'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q30'>
                    <div className='main-head_q30'>Why hasn't I bought in for me after I started the robot?</div>

                    <span className="main-span_q30">Q: Why hasn't I bought in for me after I started the robot?</span><br /><br />
                    <span className="main-span_q30">A: Under normal circumstances, the robot will be bought immediately after starting the robot. If you do not buy immediately, please check the following points: 1. Whether the API binding is correct, and whether the transaction is checked in the permissions of the API. 2. Is there a first-time preset price?
                    </span>

                </div>

            </div>
        </>
    )
}

export default q30