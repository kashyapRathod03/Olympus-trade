import React from 'react';
import "./q26.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q26() {
    return (
        <>

            <div className='lmain-div_q26'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q26'>
                    <div className='main-head_q26'>Set a drop of 4%, why the robot has not covered the position after more than 4%</div>

                    <span className="main-span_q26">Q: Set a drop of 4%, why the robot has not covered the position after more than 4%</span><br /><br />
                    <span className="main-span_q26">A: Under normal circumstances, when the downtrend reaches 4%, the robot will start the tracking and replenishment function, and callback 0.5% to replenish the position, but the robot will continue to track when the market continues to fall. <br /><br />
                        If the account balance is insufficient, the robot will lower the replenishment price. When you manually replenish the position , The robot will also intelligently judge to adjust the price of replenishment.<br />
                        The increase seen in the interface is based on the comparison between the average price and the market price. The robot's execution of replenishment is not based on the percentage of increase.<br /><br /> Therefore, the robot may not necessarily replenish the position when the increase is 4%. For the detailed replenishment price, please refer to the trigger price of the position</span>

                </div>

            </div>
        </>
    )
}

export default q26