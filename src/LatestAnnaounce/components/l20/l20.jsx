import React from 'react';
import "./l20.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option'; 
import SidebarL from "../Sidebar/SidebarL"
function l20() {
    return (
        <>

            <div className='lmain-div_l20'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option/>
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l20'>
                    <div className='main-head_l20'>System update complete</div>
                   
                    <span className="main-span_l20">Dear Royal Q users: </span><br /><br />
                    <span className="main-span_l20">  The system update has been complete. All strategy transactions have returned to normal. If you have any further questions or technical issues, please contact customer service.</span>
                    {/* <img className='span-img_l20' src={b15_1} alt="process images" /><br />
                    <span className="main-span_l20">2.Tap on the transaction record in the upper right corner.</span><br />
                    <img className='span-img_l20' src={b15_2} alt="process images" /><br />
                    <span className="main-span_l20">To ensure a smooth operation system, the system will delete transaction records every 3 months.</span><br /><br />
                    <span className="main-span_l20">How to find your profit records?</span><br /><br />
                    <span className="main-span_l20">1. Tap on the revenue details in Home page</span><br />
                    <img className='span-img_l20' src={b15_3} alt="process images" /><br />
                    <span className="main-span_l20">To ensure a smooth operation system, the system will delete profit records every 2 weeks.</span> */}
                </div>

            </div>
        </>
    )
}

export default l20