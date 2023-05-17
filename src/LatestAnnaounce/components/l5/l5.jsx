import React from 'react';
import "./l5.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option'; 
import SidebarL from "../Sidebar/SidebarL"
function l5() {
    return (
        <>

            <div className='lmain-div_l5'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option/>
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l5'>
                    <div className='main-head_l5'>Copier Owner Expiration Notice</div>
                   
                    <span className="main-span_l5">Dear Olympus Trade users: </span><br /><br />
                    <span className="main-span_l5"> To increase the liveliness of circles, if a circle owner does not renew their account after 30 days of expiration, we will cancel their circle and circle chat. Please renew your accounts to prevent losing benefits.</span><br />
                    {/* <img className='span-img_l5' src={b15_1} alt="process images" /><br />
                    <span className="main-span_l5">2.Tap on the transaction record in the upper right corner.</span><br />
                    <img className='span-img_l5' src={b15_2} alt="process images" /><br />
                    <span className="main-span_l5">To ensure a smooth operation system, the system will delete transaction records every 3 months.</span><br /><br />
                    <span className="main-span_l5">How to find your profit records?</span><br /><br />
                    <span className="main-span_l5">1. Tap on the revenue details in Home page</span><br />
                    <img className='span-img_l5' src={b15_3} alt="process images" /><br />
                    <span className="main-span_l5">To ensure a smooth operation system, the system will delete profit records every 2 weeks.</span> */}
                </div>

            </div>
        </>
    )
}

export default l5
