import React from 'react';
import "./l6.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarL from "../Sidebar/SidebarL"
function l6() {
    return (
        <>

            <div className='lmain-div_l6'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l6'>
                    <div className='main-head_l6'>Bind Telegram to receive latest information</div>

                    <span className="main-span_l6">Dear Royal Q users: </span><br /><br />
                    <span className="main-span_l6">
                        To let users receive Royal Q latest update information easier, users may now bind telegram to Royal Q.<br /><br /> By binding telegram, you will receive notifications on latest announcements and order status.<br />   Please wait for the latest update on Android to use this new feature.<br />  Users using iOS and web version please wait for a later update notice.<br /> We are very sorry if any inconvenience is caused. <br /><br />

                        Please select system settings in "My Page" and enter notification settings to bind Telegram.
                    </span><br /><br />


                    {/* <img className='span-img_l6' src={b15_1} alt="process images" /><br />
                    <span className="main-span_l6">2.Tap on the transaction record in the upper right corner.</span><br />
                    <img className='span-img_l6' src={b15_2} alt="process images" /><br />
                    <span className="main-span_l6">To ensure a smooth operation system, the system will delete transaction records every 3 months.</span><br /><br />
                    <span className="main-span_l6">How to find your profit records?</span><br /><br />
                    <span className="main-span_l6">1. Tap on the revenue details in Home page</span><br />
                    <img className='span-img_l6' src={b15_3} alt="process images" /><br />
                    <span className="main-span_l6">To ensure a smooth operation system, the system will delete profit records every 2 weeks.</span> */}
                </div>

            </div>
        </>
    )
}

export default l6


