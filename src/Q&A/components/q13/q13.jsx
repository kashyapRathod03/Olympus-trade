import React from 'react';
import "./q13.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q13() {
    return (
        <>

            <div className='lmain-div_q13'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q13'>
                    <div className='main-head_q13'>Why the robot automatically stops strategy</div>

                    <span className="main-span_q13">Q: Why the robot automatically stops strategy</span><br /><br />
                    <span className="main-span_q13">A: The Royal Q robot will stop the strategy. There is a high probability that there is an abnormality in the strategy operation. The robot must stop the operation first in order to protect the strategy operation correctly.</span><br /><br />

                </div>

            </div>
        </>
    )
}

export default q13