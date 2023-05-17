import React from 'react';
import "./q12.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q12() {
    return (
        <>

            <div className='lmain-div_q12'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q12'>
                    <div className='main-head_q12'>Why don’t you buy for me immediately after selling in the cycle strategy?</div>

                    <span className="main-span_q12">Q: Why don’t you buy for me immediately after selling in the cycle strategy?</span><br /><br />
                    <span className="main-span_q12">A: When the Royal Q robot is in operation, it needs to confirm that all the operations of this round have been completed after the take profit is sold, and then a new round of operation will be started. Sometimes the exchange confirmation information response is slow, you may need to wait a while , After the robots are all completed, a new round of strategy will start.</span><br /><br />

                </div>

            </div>
        </>
    )
}

export default q12