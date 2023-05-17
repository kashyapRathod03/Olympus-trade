import React from 'react';
import "./l28.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarL from "../Sidebar/SidebarL"
function l1() {
    return (
        <>

            <div className='lmain-div_l1'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l1'>
                    <div className='main-head_l1'>Margin call limit changes</div>

                    <span className="main-span_l1">Dear users: </span><br /><br />
                    <span className="main-span_l1"> To ensure more opportunities for investments, the margin call limit is now available to 999 margin calls as opposed to 100 margin calls before.  Digital currency tradings are high risk investments. Please invest rationally. Royal Q is not liable for any losses you may incur.</span>
                    {/* <img className='span-img_l1' src={b15_1} alt="process images" /><br />
                    <span className="main-span_l1">2.Tap on the transaction record in the upper right corner.</span><br />
                    <img className='span-img_l1' src={b15_2} alt="process images" /><br />
                    <span className="main-span_l1">To ensure a smooth operation system, the system will delete transaction records every 3 months.</span><br /><br />
                    <span className="main-span_l1">How to find your profit records?</span><br /><br />
                    <span className="main-span_l1">1. Tap on the revenue details in Home page</span><br />
                    <img className='span-img_l1' src={b15_3} alt="process images" /><br />
                    <span className="main-span_l1">To ensure a smooth operation system, the system will delete profit records every 2 weeks.</span> */}
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
