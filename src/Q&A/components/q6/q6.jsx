import React from 'react';
import "./q6.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q6() {
    return (
        <>

            <div className='lmain-div_q6'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q6'>
                    <div className='main-head_q6'>Tip API binding error?</div>

                    <span className="main-span_q6">Q: Why is the API that has been bound, prompt API error?</span><br /><br />
                    <span className="main-span_q6">A1: Do you have checked trading privileges when reclassifying the binding API;</span><br /><br />
                    <span className="main-span_q6">A2: Check if your Secret Key is fully entered (usually when you create an API, the Secret Key of the Exchange is only displayed once, and it will be displayed as ***, so check if your Secret Key is entered correctly);</span><br /><br />
                    <span className="main-span_q6">A3: Make sure you fill in the API key (Access Key) and Secret Key, the content is not filled in (for example, filling the API key to Secret Key)</span><br /><br />
                    <span className="main-span_q6">A4: When binding the Binance exchange API, confirm that the exchange you are using is a currency main station (Binance.com), not a currency US station (Binance US), because this is two different exchanges Royal q currently only supports coin-operated mainstays (binance.com)</span><br /><br />

                </div>

            </div>
        </>
    )
}

export default q6