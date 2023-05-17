import React from 'react';
import "./q14.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q14() {
    return (
        <>

            <div className='lmain-div_q14'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q14'>
                    <div className='main-head_q14'>Will the robot sell my own coins?</div>

                    <span className="main-span_q14">Q: Will the robot sell the currency that I originally held?</span><br /><br />
                    <span className="main-span_q14">A: In order to create higher returns, do not open robot trading for the currency held by individuals on the exchange, otherwise the robot will recognize the sale. It is recommended to start the robot trading currency separately from the currency you originally held. You can transfer your original currency to your legal currency account or other accounts.</span><br /><br />

                </div>

            </div>
        </>
    )
}

export default q14