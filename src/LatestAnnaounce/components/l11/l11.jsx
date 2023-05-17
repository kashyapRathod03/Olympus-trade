import React from 'react';
import "./l11.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option'; 
import SidebarL from "../Sidebar/SidebarL"
function l11() {
    return (
        <>

            <div className='lmain-div_l11'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option/>
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l11'>
                    <div className='main-head_l11'>Adjusting withdrawal transaction fee</div>
                   
                    <span className="main-span_l11">Dear Royal Q users: </span><br /><br />
                    <span className="main-span_l11">  According to an official announcement passed by the community, Royal Q will be adjusting withdrawal fees on the Tron (TRX) Network based on Proposal 83(a mechanism to perform dynamic regulation of energy in contracts to balance the distribution of energy among contracts is introduced on the Tron network). Before adjustments: 2 USDT per withdraw. After adjustment: 3USDT per withdraw. We apologize for any inconvenience brought on by the adjustment.</span><br /><br />

                    {/* <img className='span-img_l11' src={b15_1} alt="process images" /><br />
                    <span className="main-span_l11">2.Tap on the transaction record in the upper right corner.</span><br />
                    <img className='span-img_l11' src={b15_2} alt="process images" /><br />
                    <span className="main-span_l11">To ensure a smooth operation system, the system will delete transaction records every 3 months.</span><br /><br />
                    <span className="main-span_l11">How to find your profit records?</span><br /><br />
                    <span className="main-span_l11">1. Tap on the revenue details in Home page</span><br />
                    <img className='span-img_l11' src={b15_3} alt="process images" /><br />
                    <span className="main-span_l11">To ensure a smooth operation system, the system will delete profit records every 2 weeks.</span> */}
                </div>

            </div>
        </>
    )
}

export default l11
