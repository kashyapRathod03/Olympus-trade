import React from 'react';
import "./l19.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option'; 
import SidebarL from "../Sidebar/SidebarL"
function l1() {
    return (
        <>

            <div className='lmain-div_l19'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option/>
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l19'>
                    <div className='main-head_l19'>Binance transaction system fixed</div>
                   
                    <span className="main-span_l19">Dear Royal Q users: </span><br /><br />
                    <span className="main-span_l19">The Binance transaction system has been fixed. All trades and strategies have been returned to normal. If the strategy did not start automatically, please manually restart your strategy. If you have any further questions, please contact customer service.</span><br /><br />

                    {/* <img className='span-img_l19' src={b15_1} alt="process images" /><br />
                    <span className="main-span_l19">2.Tap on the transaction record in the upper right corner.</span><br />
                    <img className='span-img_l19' src={b15_2} alt="process images" /><br />
                    <span className="main-span_l19">To ensure a smooth operation system, the system will delete transaction records every 3 months.</span><br /><br />
                    <span className="main-span_l19">How to find your profit records?</span><br /><br />
                    <span className="main-span_l19">1. Tap on the revenue details in Home page</span><br />
                    <img className='span-img_l19' src={b15_3} alt="process images" /><br />
                    <span className="main-span_l19">To ensure a smooth operation system, the system will delete profit records every 2 weeks.</span> */}
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
