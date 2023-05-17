import React from 'react';
import "./q31.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q31() {
    return (
        <>

            <div className='lmain-div_q31'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q31'>
                    <div className='main-head_q31'>Can I sell manually?</div>

                    <span className="main-span_q31">Q: Can I sell manually?</span><br /><br />
                    <span className="main-span_q31">A: You can sell manually at any time, just pay attention to the following points: 1. First click pause and then click clearance to sell 2. The total selling value of Binance must be higher than 10USDT, otherwise it will not be able to sell
                    </span>

                </div>

            </div>
        </>
    )
}

export default q31