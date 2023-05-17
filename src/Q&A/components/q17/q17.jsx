import React from 'react';
import "./q17.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q17() {
    return (
        <>

            <div className='lmain-div_q17'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q17'>
                    <div className='main-head_q17'>No response when starting the robot?</div>

                    <span className="main-span_q17">Q: No response when starting the robot?</span><br /><br />
                    <span className="main-span_q17">A: Please check whether the fuel fee is sufficient, it needs to be higher than 2USDT Whether API application permissions are open, query and transaction？and currency withdrawal functions cannot be checked</span><br /><br />

                </div>

            </div>
        </>
    )
}

export default q17