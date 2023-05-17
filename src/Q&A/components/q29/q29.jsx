import React from 'react';
import "./q29.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q29() {
    return (
        <>

            <div className='lmain-div_q29'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q29'>
                    <div className='main-head_q29'>Why is the balance of BINANCE and Royal Q different?</div>

                    <span className="main-span_q29">Q: Why is the balance of BINANCE and Royal Q different?</span><br /><br />
                    <span className="main-span_q29">A: The amount of Royal Q's position is the cost of the robot's purchase. Royal Q's cost price will not change. The Binance account will change with the market price. If the currency price rises, the amount of Binance will increase. At this time, it will be a floating profit. If the currency price drops, the amount of Binance will decrease. At this time, it is a floating loss. The robot will sell when taking profit to earn intermediate profit. 24 hours for you to monitor the market for you to automatically buy low and sell high to make profits.
                    </span>

                </div>

            </div>
        </>
    )
}

export default q29