import React from 'react';
import "./l27.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarL from "../Sidebar/SidebarL"
function l27() {
    return (
        <>

            <div className='lmain-div_l27'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l27'>
                    <div className='main-head_l27'>Reducing Withdrawal Fee</div>

                    <span className="main-span_l27">According to Tron community, the transaction fee has returned to its original rate. Starting from 2023/ 02/ 22 20:10 (UTC+8)Royal Q will also change the withdrawal fee back to 2 USDT. We are very sorry for any inconvenience caused during this period. </span>
                    {/* <img className='span-img_l27' src={b15_1} alt="process images" /><br />
                    <span className="main-span_l27">2.Tap on the transaction record in the upper right corner.</span><br />
                    <img className='span-img_l27' src={b15_2} alt="process images" /><br />
                    <span className="main-span_l27">To ensure a smooth operation system, the system will delete transaction records every 3 months.</span><br /><br />
                    <span className="main-span_l27">How to find your profit records?</span><br /><br />
                    <span className="main-span_l27">1. Tap on the revenue details in Home page</span><br />
                    <img className='span-img_l27' src={b15_3} alt="process images" /><br />
                    <span className="main-span_l27">To ensure a smooth operation system, the system will delete profit records every 2 weeks.</span> */}
                </div>

            </div>
        </>
    )
}

export default l27