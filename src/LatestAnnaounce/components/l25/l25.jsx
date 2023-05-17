import React from 'react';
import "./l25.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option'; 
import SidebarL from "../Sidebar/SidebarL"
function l25() {
    return (
        <>

            <div className='lmain-div_l25'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option/>
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l25'>
                    <div className='main-head_l25'>Adding Fiat Currency Conversion</div>
                   
                    <span className="main-span_l25">Dear users: </span><br /><br />
                    <span className="main-span_l25">  To let users have better idea of how much profit was made, we have added GBP, ZAR and EUR currency. You may switch the currency in system settings located in Mine page.</span>
                    {/* <img className='span-img_l25' src={b15_1} alt="process images" /><br />
                    <span className="main-span_l25">2.Tap on the transaction record in the upper right corner.</span><br />
                    <img className='span-img_l25' src={b15_2} alt="process images" /><br />
                    <span className="main-span_l25">To ensure a smooth operation system, the system will delete transaction records every 3 months.</span><br /><br />
                    <span className="main-span_l25">How to find your profit records?</span><br /><br />
                    <span className="main-span_l25">1. Tap on the revenue details in Home page</span><br />
                    <img className='span-img_l25' src={b15_3} alt="process images" /><br />
                    <span className="main-span_l25">To ensure a smooth operation system, the system will delete profit records every 2 weeks.</span> */}
                </div>

            </div>
        </>
    )
}

export default l25