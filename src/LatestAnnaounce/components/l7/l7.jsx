import React from 'react';
import "./l7.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option'; 
import SidebarL from "../Sidebar/SidebarL"
function l7() {
    return (
        <>

            <div className='lmain-div_l7'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option/>
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l7'>
                    <div className='main-head_l7'>Strategy Adjustments</div>
                   
                    <span className="main-span_l7">Dear Royal Q users: </span><br /><br />
                    <span className="main-span_l7"> Dear Royal Q users:  To provide smoother transactions, if the account expires for more than 30 days without renewal, system will remove all strategies. Users will need to manually trade their coins in the exchange after the strategies are removed. We are very sorry for any inconvenience caused...</span><br /><br />
            
                    {/* <img className='span-img_l7' src={b15_1} alt="process images" /><br />
                    <span className="main-span_l7">2.Tap on the transaction record in the upper right corner.</span><br />
                    <img className='span-img_l7' src={b15_2} alt="process images" /><br />
                    <span className="main-span_l7">To ensure a smooth operation system, the system will delete transaction records every 3 months.</span><br /><br />
                    <span className="main-span_l7">How to find your profit records?</span><br /><br />
                    <span className="main-span_l7">1. Tap on the revenue details in Home page</span><br />
                    <img className='span-img_l7' src={b15_3} alt="process images" /><br />
                    <span className="main-span_l7">To ensure a smooth operation system, the system will delete profit records every 2 weeks.</span> */}
                </div>

            </div>
        </>
    )
}

export default l7


// function BinancePro() {

//     return (
//         <>
//         </>
//     )
// }

// export default BinancePro
