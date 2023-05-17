import React from 'react';
import "./l23.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option'; 
import SidebarL from "../Sidebar/SidebarL"
function l23() {
    return (
        <>

            <div className='lmain-div_l23'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option/>
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l23'>
                    <div className='main-head_l23'>Security Questions Notice</div>
                   
                    <span className="main-span_l23">Dear users: </span><br /><br />
                    <span className="main-span_l23"> To enforce the account security, Royal Q has added the security questions feature. <br /><br />Please write down the answer to the security questions. Due to security issues, Royal Q customer service will NOT further assist the reset of security questions.<br /><br /> We are very sorry for the inconvenience and hope you understand.</span>

                    {/* <img className='span-img_l23' src={b15_1} alt="process images" /><br />
                    <span className="main-span_l23">2.Tap on the transaction record in the upper right corner.</span><br />
                    <img className='span-img_l23' src={b15_2} alt="process images" /><br />
                    <span className="main-span_l23">To ensure a smooth operation system, the system will delete transaction records every 3 months.</span><br /><br />
                    <span className="main-span_l23">How to find your profit records?</span><br /><br />
                    <span className="main-span_l23">1. Tap on the revenue details in Home page</span><br />
                    <img className='span-img_l23' src={b15_3} alt="process images" /><br />
                    <span className="main-span_l23">To ensure a smooth operation system, the system will delete profit records every 2 weeks.</span> */}
                </div>

            </div>
        </>
    )
}

export default l23

