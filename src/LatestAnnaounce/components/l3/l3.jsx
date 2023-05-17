import React from 'react';
import "./l3.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarL from "../Sidebar/SidebarL"
function l3() {
    return (
        <>

            <div className='lmain-div_l3'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l3'>
                    <div className='main-head_l3'>iOS Limitations Notice </div>

                    <span className="main-span_l3">Dear Olympus Trade users: </span><br /><br />
                    <span className="main-span_l3">Due to the limitations from exchanges and Apple store, the following countries will not be able to download Olympus Trade.<br /><br />
                        North America: United States <br />
                        Europe: Albania, North Macedonia, Belarus, Bosnia and Herzegovina, Kosovo, Serbia  Africa, <br />
                        Middle East: Iraq, Republic of the Congo, Zimbabwe, Ivory Coast, Democratic Republic of the Congo, Liberia <br />
                        Asia-Pacific: China, Myanmar  We apologize for any inconvenience caused and thank you for your continuous support.
                    </span><br /><br />

                    {/* <img className='span-imsg_l3' src={b15_1} alt="process images" /><br />
                    <span className="main-span_l3">2.Tap on the transaction record in the upper right corner.</span><br />
                    <img className='span-img_l3' src={b15_2} alt="process images" /><br />
                    <span className="main-span_l3">To ensure a smooth operation system, the system will delete transaction records every 3 months.</span><br /><br />
                    <span className="main-span_l3">How to find your profit records?</span><br /><br />
                    <span className="main-span_l3">1. Tap on the revenue details in Home page</span><br />
                    <img className='span-img_l3' src={b15_3} alt="process images" /><br />
                    <span className="main-span_l3">To ensure a smooth operation system, the system will delete profit records every 2 weeks.</span> */}
                </div>

            </div>
        </>
    )
}

export default l3


// function BinancePro() {

//     return (
//         <>
//         </>
//     )
// }

// export default BinancePro
