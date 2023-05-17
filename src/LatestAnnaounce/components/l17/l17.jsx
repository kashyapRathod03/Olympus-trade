import React from 'react';
import "./l17.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option'; 
import SidebarL from "../Sidebar/SidebarL"
function l17() {
    return (
        <>

            <div className='lmain-div_l17'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option/>
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l17'>
                    <div className='main-head_l17'>System maintenances</div>
                   
                    <span className="main-span_l17">Dear User, To provide you with better services, <br/> Royal Q will have a system maintenance.<br/> All features, including transactions, withdrawal and login will be suspended for 10 minutes.<br/> <br/>  We apologize for any inconvenience brought on by the system maintenance.<br/>   Maintenance duration: 2023/1/4 3:00~3:10PM(UTC+8)</span>
                    {/* <img className='span-img_l17' src={b15_1} alt="process images" /><br />
                    <span className="main-span_l17">2.Tap on the transaction record in the upper right corner.</span><br />
                    <img className='span-img_l17' src={b15_2} alt="process images" /><br />
                    <span className="main-span_l17">To ensure a smooth operation system, the system will delete transaction records every 3 months.</span><br /><br />
                    <span className="main-span_l17">How to find your profit records?</span><br /><br />
                    <span className="main-span_l17">1. Tap on the revenue details in Home page</span><br />
                    <img className='span-img_l17' src={b15_3} alt="process images" /><br />
                    <span className="main-span_l17">To ensure a smooth operation system, the system will delete profit records every 2 weeks.</span> */}
                </div>

            </div>
        </>
    )
}

export default l17