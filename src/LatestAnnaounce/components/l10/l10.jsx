import React from 'react';
import "./l10.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option'; 
import SidebarL from "../Sidebar/SidebarL"
function _l100() {
    return (
        <>

            <div className='lmain-div_l10'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option/>
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l10'>
                    <div className='main-head_l10'>Adjusting first buy in amount</div>
                   
                    <span className="main-span_l10">Dear Royal Q users: </span><br /><br />
                    <span className="main-span_l10"> 
                    To avoid failing to sell due to not reaching the 10 USDT for total transaction amount limit in the exchange after take profit , the minimum of first order amount has been adjusted to 15USDT. <br /><br /> Please also find the following link for previous announcement:
                    </span><br /><br />
                    {/* <img className='span-img__l10' src={b15_1} alt="process images" /><br />
                    <span className="main-span__l10">2.Tap on the transaction record in the upper right corner.</span><br />
                    <img className='span-img__l10' src={b15_2} alt="process images" /><br />
                    <span className="main-span__l10">To ensure a smooth operation system, the system will delete transaction records every 3 months.</span><br /><br />
                    <span className="main-span__l10">How to find your profit records?</span><br /><br />
                    <span className="main-span__l10">1. Tap on the revenue details in Home page</span><br />
                    <img className='span-img__l10' src={b15_3} alt="process images" /><br />
                    <span className="main-span__l10">To ensure a smooth operation system, the system will delete profit records every 2 weeks.</span> */}
                </div>

            </div>
        </>
    )
}

export default _l100
