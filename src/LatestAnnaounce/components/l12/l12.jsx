import React from 'react';
import "./l12.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option'; 
import SidebarL from "../Sidebar/SidebarL"
function l12() {
    return (
        <>

            <div className='lmain-div_l12'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option/>
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l12'>
                    <div className='main-head_l12'>Team Page Adjustments</div>
                   
                    <span className="main-span_l12">Dear Royal Q users: </span><br /><br />
                    <span className="main-span_l12"> If users wish to rank up, all the accounts that are used to meet the rank up conditions must be valid accounts. Valid accounts mean accounts that are active and not expired. To let the users have a clearer idea of their current status, we have made some adjustments with the display in the team page active column. The numbers shown in active only shows valid accounts. For further information, please feel free to ask customer service.</span><br /><br />
                    {/* <img className='span-img_l12' src={b15_1} alt="process images" /><br />
                    <span className="main-span_l12">2.Tap on the transaction record in the upper right corner.</span><br />
                    <img className='span-img_l12' src={b15_2} alt="process images" /><br />
                    <span className="main-span_l12">To ensure a smooth operation system, the system will delete transaction records every 3 months.</span><br /><br />
                    <span className="main-span_l12">How to find your profit records?</span><br /><br />
                    <span className="main-span_l12">1. Tap on the revenue details in Home page</span><br />
                    <img className='span-img_l12' src={b15_3} alt="process images" /><br />
                    <span className="main-span_l12">To ensure a smooth operation system, the system will delete profit records every 2 weeks.</span> */}
                </div>

            </div>
        </>
    )
}

export default l12

