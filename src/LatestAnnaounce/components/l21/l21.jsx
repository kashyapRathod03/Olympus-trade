import React from 'react';
import "./l21.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option'; 
import SidebarL from "../Sidebar/SidebarL"
function l1() {
    return (
        <>

            <div className='lmain-div_l21'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option/>
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l21'>
                    <div className='main-head_l21'>System update delay</div>
                   
                    <span className="main-span_l21">Dear users: </span><br /><br />
                    <span className="main-span_l21"> The strategy system update will be delayed until 2022/12/14 10:00(UTC+8). We apologize for any inconvenience brought on by the system update. Please feel free to contact customer service if you have any questions or technical issues.</span>
                
                    {/* <img className='span-img_l21' src={b15_1} alt="process images" /><br />
                    <span className="main-span_l21">2.Tap on the transaction record in the upper right corner.</span><br />
                    <img className='span-img_l21' src={b15_2} alt="process images" /><br />
                    <span className="main-span_l21">To ensure a smooth operation system, the system will delete transaction records every 3 months.</span><br /><br />
                    <span className="main-span_l21">How to find your profit records?</span><br /><br />
                    <span className="main-span_l21">1. Tap on the revenue details in Home page</span><br />
                    <img className='span-img_l21' src={b15_3} alt="process images" /><br />
                    <span className="main-span_l21">To ensure a smooth operation system, the system will delete profit records every 2 weeks.</span> */}
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
