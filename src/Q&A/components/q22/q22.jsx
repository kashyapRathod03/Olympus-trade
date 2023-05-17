import React from 'react';
import "./q22.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q22() {
    return (
        <>

            <div className='lmain-div_q22'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q22'>
                    <div className='main-head_q22'>May I ask the difference between the quantity bought and sold each time, where is the rest?</div>

                    <span className="main-span_q22">Q: May I ask the difference between the quantity bought and sold each time, where is the rest?</span><br /><br />
                    <span className="main-span_q22">A: The purchased quantity is converted based on the purchased USDT. Because the price is constantly changing, the quantity that may be purchased for the same amount of USDT will be different. The robot will automatically help you buy low and sell high for 24 hours, and earn the intermediate price difference; for example, if you buy 10 yuan and increase to 20 yuan sell, you will make a difference of 10 yuan, and then use the robot to trade 24 hours a day. When buying, the exchange will deduct the amount of the purchased currency as a handling fee. At this time, the amount of currency purchased will be reduced, and the amount of currency will be reduced when selling. At the same time, each exchange has set a decimal point when selling, and the currency after the decimal point precision will be kept in the exchange account and accumulated</span><br /><br />

                </div>

            </div>
        </>
    )
}

export default q22