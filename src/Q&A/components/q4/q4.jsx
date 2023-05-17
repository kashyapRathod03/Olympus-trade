import React from 'react';
import "./q4.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q4() {
    return (
        <>

            <div className='lmain-div_q4'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q4'>
                    <div className='main-head_q4'>Why is the amount of my buying transaction in the transaction record higher than the amount of my se</div>

                    <span className="main-span_q4">Q: Why is my buying transaction amount higher than my selling transaction amount in the transaction record?</span><br /><br />
                    <span className="main-span_q4">A: Because the purchase amount is displayed as the actual purchase amount plus the transaction fee of the exchange, the overall display is your purchase cost, and the sale is only the amount of the transaction currency, so the display will cause the purchase time The transaction amount of may be higher than your selling transaction amount!</span><br /><br />

                </div>

            </div>
        </>
    )
}

export default q4