import React from 'react';
import "./q27.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q27() {
    return (
        <>

            <div className='lmain-div_q27'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q27'>
                    <div className='main-head_q27'>Why does my synchronization strategy have an amount of 5USDT in the first order?</div>

                    <span className="main-span_q27">Q: Why does my synchronization strategy have an amount of 5USDT in the first order?</span><br /><br />
                    <span className="main-span_q27">A: If the owner of Royal Q turns on the first doubling and the synchronized set amount is 10USDT, it will be displayed as your first order amount is 5USDT, which does not affect the synchronization strategy.</span>

                </div>

            </div>
        </>
    )
}

export default q27