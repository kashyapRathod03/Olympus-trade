import React from 'react';
import "./l9.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarL from "../Sidebar/SidebarL"
function l9() {
    return (
        <>

            <div className='lmain-div_l9'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l9'>
                    <div className='main-head_l9'>Please do not share your API binding process</div>

                    <span className="main-span_l9">Dear Royal Q users: </span><br /><br />
                    <span className="main-span_l9">
                        There have been many users seeking for help while trying to connect API with the exchange. They are sharing their API binding process through video calls and screenshots.<br /><br /> To avoid being scammed, please do not share your API binding process with others through video calls, screenshots or remote access software. When binding API, please do NOT check the withdraw/transfer box. <br />Please only search for information or download our APP from our official website at: <a href='https://olympustrade.ai.com' target='_blank'>https://olympustrade.ai.com.</a><br /><br /> Royal Q cannot and will not be liable for any loss from users failing to check for false information.
                    </span>

                    {/* <img className='span-img_l9' src={b15_1} alt="process images" /><br />
                    <span className="main-span_l9">2.Tap on the transaction record in the upper right corner.</span><br />
                    <img className='span-img_l9' src={b15_2} alt="process images" /><br />
                    <span className="main-span_l9">To ensure a smooth operation system, the system will delete transaction records every 3 months.</span><br /><br />
                    <span className="main-span_l9">How to find your profit records?</span><br /><br />
                    <span className="main-span_l9">1. Tap on the revenue details in Home page</span><br />
                    <img className='span-img_l9' src={b15_3} alt="process images" /><br />
                    <span className="main-span_l9">To ensure a smooth operation system, the system will delete profit records every 2 weeks.</span> */}
                </div>

            </div>
        </>
    )
}

export default l9


// function BinancePro() {

//     return (
//         <>
//         </>
//     )
// }

// export default BinancePro
