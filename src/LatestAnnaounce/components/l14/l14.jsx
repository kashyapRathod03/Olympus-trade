import React from 'react';
import "./l14.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option'; 
import SidebarL from "../Sidebar/SidebarL"
function l1() {
    return (
        <>

            <div className='lmain-div_l14'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option/>
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l14'>
                    <div className='main-head_l14'>Exchange cease operations in Japan</div>
                   
                    <span className="main-span_l14">Dear Royal Q users: </span><br /><br />
                    <span className="main-span_l14">Coinbase will be ceasing all transactions including withdrawal for Japan users on 2/16 JST.<br /> Kraken has also announced that all transactions including withdrawal will be terminated for Japan users on 1/31.<br /> We advise all users from Japan to stop your trades and withdraw your assets before said time. For more information, <br />please refer to the announcement on Coinbase and Kraken website.</span>
                    {/* <img className='span-img_l14' src={b15_1} alt="process images" /><br />
                    <span className="main-span_l14">2.Tap on the transaction record in the upper right corner.</span><br />
                    <img className='span-img_l14' src={b15_2} alt="process images" /><br />
                    <span className="main-span_l14">To ensure a smooth operation system, the system will delete transaction records every 3 months.</span><br /><br />
                    <span className="main-span_l14">How to find your profit records?</span><br /><br />
                    <span className="main-span_l14">1. Tap on the revenue details in Home page</span><br />
                    <img className='span-img_l14' src={b15_3} alt="process images" /><br />
                    <span className="main-span_l14">To ensure a smooth operation system, the system will delete profit records every 2 weeks.</span> */}
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
