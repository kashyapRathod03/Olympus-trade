import React from 'react';
import "./q18.css";
import q18_1 from "../../images/q18_1.png";
import q18_2 from "../../images/q18_2.png";
import q18_3 from "../../images/q18_3.png";
import q18_4 from "../../images/q18_4.png";
import q18_5 from "../../images/q18_5.png";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q18() {
    return (
        <>

            <div className='lmain-div_q18'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q18'>
                    <div className='main-head_q18'>What is LIQUIDATION and REPLENISHMENT?</div>

                    <span className="main-span_q18">ROBOT STRATEGY NEW FEATURE INTRODUCTION</span><br /><br />
                    <span className="main-span_q18"><b>Open/stop margin call</b></span><br /><br />
                    <span className="main-span_q18">1. Open the royal q quantitative trading page and click "currency"</span><br /><br />
                    <img className='span-img_iq18' src={q18_1} alt="process images" /><br />
                    <span className="main-span_q18">2. Enter the currency details page, if you want to stop replenishment, click "Stop margin cal". When you want to restart the margin call, click "Open margin call"</span><br /><br />
                    <img className='span-img_q18' src={q18_2} alt="process images" /><br />

                    <span className="main-span_q18"><b>Buy</b></span><br /><br />
                    <span className="main-span_q18">1. Click "Buy" in the function area<br /><br />
                        2. (1) Adjust to customize "trigger price". Note: Trigger prices is higher than the current market price will be purchased immediately.<br />
                        (2) Click the "current price" to enter automatically<br />
                        (3) Click on the "market price" to switch to the market price<br /><br />
                        3. Enter the amount of replenishment, and the system automatically calculates the "average position price" and "position profit and loss" according to the current market conditions.<br /> Note: The minimum transaction amount for margin call is 10USDT
                    </span><br /><br />
                    <img className='span-img_q18' src={q18_3} alt="process images" /><br />

                    <span className="main-span_q18"><b>Sell</b></span><br /><br />
                    <span className="main-span_q18">1. Click "Sell" in the function area<br /><br />
                        2. (1) Adjust to customize "trigger price".Note: The price of trigger is lower than the current market price will
                        be sold immediately.
                        (2) Click the "current price" to enter automatically
                        (3) Click on the "market price" to switch to the market price<br /><br />
                        3. Adjust to a custom input "clearance quantity" (click below the clearance quantity, select the percentage, the system will automatically enter).<br /> Note: Some clearance minimal turnover is 10USDT, and the position of the position is less than 10USDT. Please select the market price of 100% clearance. Because the amount is lower than the minimum of the transaction, the trading currency will remain in your exchange account.
                    </span><br /><br />
                    <img className='span-img_q18' src={q18_4} alt="process images" /><br />

                    <span className="main-span_q18"><b>Manually cancel an order</b></span><br /><br />
                    <span className="main-span_q18">1.Manual to cover short positions, manual clearance,If the order cannot be traded due to the price of the pending order, you can manually "cancel an order" in the currency details.</span><br /><br />
                    <img className='span-img_iq18' src={q18_5} alt="process images" /><br />

                </div>

            </div>
        </>
    )
}

export default q18