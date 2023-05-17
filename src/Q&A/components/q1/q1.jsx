import React from 'react';
import "./q1.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q1() {
    return (
        <>

            <div className='lmain-div_q1'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q1'>
                    <div className='main-head_q1'>Why have I not moved up a rank?</div>

                    <span className="main-span_q1">Q: Why have I not moved up a rank after reaching the requirement? </span><br /><br />
                    <span className="main-span_q1">A: Please make sure that all of your team members have valid (active) accounts. This mean that all of the required team member accounts will need to be active and not expired.</span><br /><br />

                </div>

            </div>
        </>
    )
}

export default q1