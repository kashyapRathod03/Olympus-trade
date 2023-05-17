import React from 'react';
import "./l8.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarL from "../Sidebar/SidebarL"
function l8() {
    return (
        <>

            <div className='lmain-div_l8'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l8'>
                    <div className='main-head_l8'>Please Do Not Use Royal Q to Collect Outer Payments</div>

                    <span className="main-span_l8">Dear Royal Q users: </span><br /><br />
                    <span className="main-span_l8">
                        We have recently found users using Royal Q depositing address to collect payment. Royal Q Asset is only for giving system bonus, collecting fuel fee, and collecting activation fee. Please do not use it to collect payments for other platforms. We will ban the account if found such act.

                    </span><br /><br />

                    {/* <img className='span-img_l8' src={b15_1} alt="process images" /><br />
                    <span className="main-span_l8">2.Tap on the transaction record in the upper right corner.</span><br />
                    <img className='span-img_l8' src={b15_2} alt="process images" /><br />
                    <span className="main-span_l8">To ensure a smooth operation system, the system will delete transaction records every 3 months.</span><br /><br />
                    <span className="main-span_l8">How to find your profit records?</span><br /><br />
                    <span className="main-span_l8">1. Tap on the revenue details in Home page</span><br />
                    <img className='span-img_l8' src={b15_3} alt="process images" /><br />
                    <span className="main-span_l8">To ensure a smooth operation system, the system will delete profit records every 2 weeks.</span> */}
                </div>

            </div>
        </>
    )
}

export default l8


// function BinancePro() {

//     return (
//         <>
//         </>
//     )
// }

// export default BinancePro
