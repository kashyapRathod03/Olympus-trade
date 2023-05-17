import React from 'react';
import "./l1.css";
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
                    <div className='main-head_l1'>New Trading Pairs</div>

                    <span className="main-span_l1">Dear Olympus Trade users: </span><br /><br />
                    <span className="main-span_l1"> Thank you for your votes! We heard you and unlocked the following trading pairs for each Exchange:</span><br /><br />

                    Binance: NEAR/USDT, ROSE/USDT, ALPINE/USDT, IDEX/USDT, MASK/USDT, CFX/USDT, ARB/USDT, INJ/USDT <br /><br />
                    Huobi: NEAR/USDT, IDEX/USDT, MASK/USDT, ARB/USDT, INJ/USDT  Coinbase: NEAR/USDT, ROSE/USDT, IDEX/USDT, MASK/USDT <br /><br />
                    Bybit: NEAR/USDT, ROSE/USDT, MASK/USDT, ARB/USDT, INJ/USDT <br /><br />
                    OKX: NEAR/USDT, MASK/USDT, CFX/USDT, ARB/USDT  The cryptocurrency trading is subject to high market risk. <br />
                    Please do risk assessment cautiously. Olympus Trade is not liable for any investment losses. <br /><br />
                    Thank you for your support!  <br />
                    Olympus Trade Operations Team
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
