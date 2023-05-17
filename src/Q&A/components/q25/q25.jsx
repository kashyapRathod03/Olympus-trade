import React from 'react';
import "./q25.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q25() {
    return (
        <>

            <div className='lmain-div_q25'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q25'>
                    <div className='main-head_q25'>Why didn’t the USDT increase in my Royal Q account?</div>

                    <span className="main-span_q25">Q: Why didn’t the USDT increase inWhy didn’t the USDT increase in my Royal Q account after I sold the coins?</span><br /><br />
                    <span className="main-span_q25">A: Robot trading is carried out on the exchange, and profits are also kept on the exchange, not in the Royal Q account.</span>

                </div>

            </div>
        </>
    )
}

export default q25