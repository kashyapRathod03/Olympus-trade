import React from 'react';
import "./l4.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarL from "../Sidebar/SidebarL"
function l4() {
    return (
        <>

            <div className='lmain-div_l4'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l4'>
                    <div className='main-head_l4'>New Investment Currency Feature</div>

                    <span className="main-span_l4">Dear Olympus Trade users: </span><br /><br />
                    <span className="main-span_l4">
                        To provide users with more investment choices, <br />we have added the option to select investment currency.<br /><br /> You may choose to use the base currency or the quote currency to invest, for example, in the BTC/USDT pair, you may choose to use BTC or USDT to start the trade.<br /><br /> This new investment choice may only be used in Grid Strategy.
                    </span>


                    {/* <img className='span-img_l4' src={b15_1} alt="process images" /><br />
                    <span className="main-span_l4">2.Tap on the transaction record in the upper right corner.</span><br />
                    <img className='span-img_l4' src={b15_2} alt="process images" /><br />
                    <span className="main-span_l4">To ensure a smooth operation system, the system will delete transaction records every 3 months.</span><br /><br />
                    <span className="main-span_l4">How to find your profit records?</span><br /><br />
                    <span className="main-span_l4">1. Tap on the revenue details in Home page</span><br />
                    <img className='span-img_l4' src={b15_3} alt="process images" /><br />
                    <span className="main-span_l4">To ensure a smooth operation system, the system will delete profit records every 2 weeks.</span> */}
                </div>

            </div>
        </>
    )
}

export default l4


