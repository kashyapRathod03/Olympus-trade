import React from 'react';
import "./q33.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q33() {
    return (
        <>

            <div className='lmain-div_q33'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q33'>
                    <div className='main-head_q33'>Can I bind two robots with one API?</div>

                    <span className="main-span_q33">Q: Can I bind two robots with one API?</span><br /><br />
                    <span className="main-span_q33">A:No, this will cause data confusion and easily cause abnormalities.</span><br /><br />

                </div>

            </div>
        </>
    )
}

export default q33