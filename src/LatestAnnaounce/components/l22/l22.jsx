import React from 'react';
import "./l22.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarL from "../Sidebar/SidebarL"
function l1() {
    return (
        <>

            <div className='lmain-div_l22'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l22'>
                    <div className='main-head_l22'>Royal Q System Upgrade Announcement</div>

                    <span className="main-span_l22">
                        Dear User, To ensure the highest quality service, Royal Q will update its strategy system during the time period given below. <br />All strategy related transactions will be paused during the update period. <br />All the other Royal Q features will continue to function normally.<br /> The period of updating is estimated to be 2022-12-13 10:00 ~ 14:00 (UTC+8). <br /> We apologize for any inconvenience brought on by the system update. <br /><br />
                        Note: All strategy related transactions will be paused during the system update period. Once the update is completely finished, we will restore transactions services as soon as possible. Royal Q will assist in any technical issues during the update period. Once the strategy system has finished updating and all networking is stable, transactions will start again normally. There will be no further announcements.  In the event of any conflict arising in translations, the English version shall prevail.

                    </span><br />
                    {/* <img className='span-img_l22' src={b15_1} alt="process images" /><br />
                    <span className="main-span_l22">2.Tap on the transaction record in the upper right corner.</span><br />
                    <img className='span-img_l22' src={b15_2} alt="process images" /><br />
                    <span className="main-span_l22">To ensure a smooth operation system, the system will delete transaction records every 3 months.</span><br /><br />
                    <span className="main-span_l22">How to find your profit records?</span><br /><br />
                    <span className="main-span_l22">1. Tap on the revenue details in Home page</span><br />
                    <img className='span-img_l22' src={b15_3} alt="process images" /><br />
                    <span className="main-span_l22">To ensure a smooth operation system, the system will delete profit records every 2 weeks.</span> */}
                </div>

            </div>
        </>
    )
}

export default l1


// function BinancePro() {

//     return (
//         <>
//         </>
//     )
// }

// export default BinancePro
