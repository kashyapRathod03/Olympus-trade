import React from 'react';
import "./l24.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarL from "../Sidebar/SidebarL"
function l24() {
    return (
        <>

            <div className='lmain-div_l24'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l24'>
                    <div className='main-head_l24'>French and Arabic Now Available</div>

                    <span className="main-span_l24">Dear Royal Q users: </span><br /><br />
                    <span className="main-span_l24">
                        To ensure that more users can use Royal Q easily, French and Arabic is now available. If you wish to change the language, please click the “System settings” in “Mine” page.<br /><br />

                        Thank you for your support to Royal Q!<br />
                        Royal Q Operations Team</span>
                    {/* <img className='span-img_l24' src={b15_1} alt="process images" /><br />
                    <span className="main-span_l24">2.Tap on the transaction record in the upper right corner.</span><br />
                    <img className='span-img_l24' src={b15_2} alt="process images" /><br />
                    <span className="main-span_l24">To ensure a smooth operation system, the system will delete transaction records every 3 months.</span><br /><br />
                    <span className="main-span_l24">How to find your profit records?</span><br /><br />
                    <span className="main-span_l24">1. Tap on the revenue details in Home page</span><br />
                    <img className='span-img_l24' src={b15_3} alt="process images" /><br />
                    <span className="main-span_l24">To ensure a smooth operation system, the system will delete profit records every 2 weeks.</span> */}
                </div>

            </div>
        </>
    )
}

export default l24
