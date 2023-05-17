import React from 'react';
import "./l18.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option'; 
import SidebarL from "../Sidebar/SidebarL"
function l1() {
    return (
        <>

            <div className='lmain-div_l18'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option/>
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l18'>
                    <div className='main-head_l18'>Reminder on Binance API binding</div>
                   
                    <span className="main-span_l18">Dear Royal Q users: </span><br /><br />
                    <span className="main-span_l18">  To ensure user transaction safety,<br /> Binance will automatically unbind the API which have not set the IP whitelist after 30 days. <br /><br />To avoid effecting your current trading, please make sure that you have paste the IP address to restrict access to IP address only.<br /><br /> If you have any questions regarding binding API, please refer to this article:<br /><br /> <a href='https://news.royalqs.com/#/articles/363'>https://news.royalqs.com/#/articles/363.</a> </span>
                    
                    {/* <img className='span-img_l18' src={b15_1} alt="process images" /><br />
                    <span className="main-span_l18">2.Tap on the transaction record in the upper right corner.</span><br />
                    <img className='span-img_l18' src={b15_2} alt="process images" /><br />
                    <span className="main-span_l18">To ensure a smooth operation system, the system will delete transaction records every 3 months.</span><br /><br />
                    <span className="main-span_l18">How to find your profit records?</span><br /><br />
                    <span className="main-span_l18">1. Tap on the revenue details in Home page</span><br />
                    <img className='span-img_l18' src={b15_3} alt="process images" /><br />
                    <span className="main-span_l18">To ensure a smooth operation system, the system will delete profit records every 2 weeks.</span> */}
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
