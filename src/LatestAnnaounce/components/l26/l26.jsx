import React from 'react';
import "./l26.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option'; 
import SidebarL from "../Sidebar/SidebarL"
function l1() {
    return (
        <>

            <div className='lmain-div_l26'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option/>
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l26'>
                    <div className='main-head_l26'>Notice for Adjusting first buy in amount</div>
                   
                    <span className="main-span_l26">Dear Royal Q users: </span><br /><br />
                    <span className="main-span_l26"> To avoid failing to sell due to not reaching the 10 USDT for total transaction amount limit in the exchange after take profit,<br /> the minimum of first order amount will be adjusted to 12USDT on 2023/2/27 10:10(UTC+8). <br /><br /> Royal Q suggests users to set 15 USDT to ensure a successful trade.<br /><br />  Please also find the following link for previous announcement: <a href='https://news.royalqs.com/#/articles/3841'>https://news.royalqs.com/#/articles/3841</a> </span>

                    {/* <img className='span-img_l26' src={b15_1} alt="process images" /><br />
                    <span className="main-span_l26">2.Tap on the transaction record in the upper right corner.</span><br />
                    <img className='span-img_l26' src={b15_2} alt="process images" /><br />
                    <span className="main-span_l26">To ensure a smooth operation system, the system will delete transaction records every 3 months.</span><br /><br />
                    <span className="main-span_l26">How to find your profit records?</span><br /><br />
                    <span className="main-span_l26">1. Tap on the revenue details in Home page</span><br />
                    <img className='span-img_l26' src={b15_3} alt="process images" /><br />
                    <span className="main-span_l26">To ensure a smooth operation system, the system will delete profit records every 2 weeks.</span> */}
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
