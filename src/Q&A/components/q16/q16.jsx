import React from 'react';
import "./q16.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q16() {
    return (
        <>

            <div className='lmain-div_q16'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q16'>
                    <div className='main-head_q16'>My strategy is cyclic, why does the robot stop?</div>

                    <span className="main-span_q16">Q: Why is my strategy that the looping robot will stop? </span><br /><br />
                    <span className="main-span_q16">Q: When the robot receives an abnormal signal from the exchange, it will first stop continuing to operate, so as not to cause greater problems, so when the robot has an abnormal condition, it will stoMy strategy is cyclic, why does the robot stop?</span><br /><br />
                    <span className="main-span_q16">A: When the robot receives an abnormal signal from the exchange, it will stop operation first, so as not to cause more problems.</span><br /><br />

                </div>

            </div>
        </>
    )
}

export default q16