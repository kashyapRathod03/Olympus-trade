import React from 'react';
import "./l15.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option'; 
import SidebarL from "../Sidebar/SidebarL"
function l15() {
    return (
        <>

            <div className='lmain-div_l15'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option/>
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l15'>
                    <div className='main-head_l15'>Beware of new scams</div>
                   
                    <span className="main-span_l15">Dear Royal Q users: </span><br /><br />
                    <span className="main-span_l15"> We have recently received feedback that there are notifications from social media asking them to provide personal information to collect rewards. This is a scam. Please do NOT enter your information. Please refer to our website for all information, activities, and prizes.   Royal Q cannot and will not be liable for any loss from users failing to check for false information.</span>
                    {/* <img className='span-img_l15' src={b15_1} alt="process images" /><br />
                    <span className="main-span_l15">2.Tap on the transaction record in the upper right corner.</span><br />
                    <img className='span-img_l15' src={b15_2} alt="process images" /><br />
                    <span className="main-span_l15">To ensure a smooth operation system, the system will delete transaction records every 3 months.</span><br /><br />
                    <span className="main-span_l15">How to find your profit records?</span><br /><br />
                    <span className="main-span_l15">1. Tap on the revenue details in Home page</span><br />
                    <img className='span-img_l15' src={b15_3} alt="process images" /><br />
                    <span className="main-span_l15">To ensure a smooth operation system, the system will delete profit records every 2 weeks.</span> */}
                </div>

            </div>
        </>
    )
}

export default l15
