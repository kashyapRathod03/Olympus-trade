import React from 'react';
import "./q24.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q24() {
    return (
        <>

            <div className='lmain-div_q24'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q24'>
                    <div className='main-head_q24'>I accidentally deposited other currencies to the Royal Q platform, can I get it back?</div>

                    <span className="main-span_q24">Q: I accidentally deposited other currencies to the Royal Q platform, can I get it back?</span><br /><br />
                    <span className="main-span_q24">A: The Royal Q platform currently only supports TRC20-USDT Deposit. If you accidentally deposit other formats of USDT or other coins to the Royal Q platform, the Royal Q platform cannot retrieve it for you. Please be extra careful with selecting coins and format when you deposit.</span>

                </div>

            </div>
        </>
    )
}

export default q24