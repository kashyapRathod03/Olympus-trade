import React from 'react';
import "./l13.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarL from "../Sidebar/SidebarL"
function l1() {
    return (
        <>

            <div className='lmain-div_l13'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l13'>
                    <div className='main-head_l13'>Grid Strategy Now Available</div>

                    <span className="main-span_l13">Dear Royal Q users: </span><br /><br />
                    <span className="main-span_l13">To enable users to have more strategy choices for different market situations, Grid strategy is now available. User may choose between strategies and use the one they find most suitable for the current market.<br /><br />
                        Android users please update to the latest version: 4.8.2.<br />
                        iOS system users currently will not be able to update. <br /><br />Please use the web version for grid strategies.  Website link: <a href='https://ssr.royalqs.com/pc/sign'> https://ssr.royalqs.com/pc/sign </a><br /> Ways to create a shortcut: <a href='https://news.royalqs.com/#/articles/4992'>https://news.royalqs.com/#/articles/4992</a> <br /> If you wish to learn how to create a strategy, please find the link here: <a href='https://news.royalqs.com/#/articles/4974'>https://news.royalqs.com/#/articles/4974</a><br />For a detailed explanation of the grid, please find the link here: <a href='https://news.royalqs.com/#/articles/5003'>https://news.royalqs.com/#/articles/5003</a>
                        <br /><br />Currently Grid strategy is only available for Binance exchange. We will continue to update for Huobi/ Coinbase pro users. Please check the announcement for latest update</span>
                    {/* <img className='span-img_l13' src={b15_1} alt="process images" /><br />
                    <span className="main-span_l13">2.Tap on the transaction record in the upper right corner.</span><br />
                    <img className='span-img_l13' src={b15_2} alt="process images" /><br />
                    <span className="main-span_l13">To ensure a smooth operation system, the system will delete transaction records every 3 months.</span><br /><br />
                    <span className="main-span_l13">How to find your profit records?</span><br /><br />
                    <span className="main-span_l13">1. Tap on the revenue details in Home page</span><br />
                    <img className='span-img_l13' src={b15_3} alt="process images" /><br />
                    <span className="main-span_l13">To ensure a smooth operation system, the system will delete profit records every 2 weeks.</span> */}
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
