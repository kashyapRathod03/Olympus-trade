import React from 'react';
import "./q36.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q36() {
    return (
        <>

            <div className='lmain-div_q36'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q36'>
                    <div className='main-head_q36'>I set a take profit of 1.3%, why the robot sells not 1.3%</div>

                    <span className="main-span_q36">Q: I set a take profit of 1.3%, why the robot sells not 1.3%</span><br /><br />
                    <span className="main-span_q36">A: When the market reaches 1.3%, the robot will start tracking and take profit, continue tracking, and sell when the market pulls back, and the profit after the sale needs to deduct the exchange fee, so it is normally between 0.6% and 0.8% , The market may rise more and the market decline may decrease, but it will not sell at a loss.</span><br /><br />

                </div>

            </div>
        </>
    )
}

export default q36