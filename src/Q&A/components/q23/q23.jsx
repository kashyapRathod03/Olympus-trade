import React from 'react';
import "./q23.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q23() {
    return (
        <>

            <div className='lmain-div_q23'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q23'>
                    <div className='main-head_q23'>The current exchange balance is not displayed</div>

                    <span className="main-span_q23">Q: The current exchange balance is not displayed</span><br /><br />
                    <span className="main-span_q23">A:Please close the APP and restart it to get the data again.</span>

                </div>

            </div>
        </>
    )
}

export default q23