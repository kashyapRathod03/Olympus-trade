import React from 'react';
import "./l2.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarL from "../Sidebar/SidebarL"
function l1() {
    return (
        <>

            <div className='lmain-div_l2'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l2'>
                    <div className='main-head_l2'>User Ranking Promotion Adjustment Notice</div>

                    <span className="main-span_l2">Dear Olympus Trade users:<br /><br />
                        <span className="main-span_l2">Dear Olympus Trade users:  To improve the quality of service and the broker system, we will adjust the rank name as the following:  </span><br /><br />

                        V1 will be adjusted to Junior Broker<br />
                        V2 will be adjusted to Middle Broker <br />
                        V3 will be adjusted to Advanced Broker<br />
                        V4 will be adjusted to Senior Broker<br />
                        V5 will be adjusted to Team Partner <br />
                        V6 will be adjusted to Global Partner <br />
                        We hope to help you increase the profitability. <br /><br />
                        Therefore, we have also adjusted the conditions to rank up: <br /><br />
                        1. Achieve Junior Broker<br /> ① Achieve the Junior Broker status by paying 120USDT to activating your account. <br /><br />
                        2. Achieve Middle Broker <br />① Directly invite and activate 20 users. <br /> ② Directly invite and activate 3 Junior Brokers and reach 20 Junior Brokers within your team.<br /> Meet one of the two conditions to be promoted to Middle Broker.<br /><br />
                        3. Achieve Advanced Broker<br /> ① Directly invite and activate 450 users. <br /> ② Directly invite and activate 5 users, have 3 Middle Brokers in 3 different lines and reach 100 users within your team. <br />Meet one of the two conditions to be promoted to Advanced Broker. <br /><br />
                        4. Achieve Senior Broker<br /> ① Directly invite and activate 2160 users. <br /> ② Directly invite and activate 8 users, have 3 Advanced Broker in 3 different lines and reach 300 users within your team. <br />Meet one of the two conditions to be promoted to Senior Broker.<br /><br />
                        5. Achieve Team Partner<br /> ① Directly invite and activate 4320 users. <br /> ② Directly invite and activate 12 users, have 3 Senior Broker in 3 different lines and reach 800 users within your team.<br /> Meet one of the two conditions to be promoted to Team Partner.<br /><br />
                        6. Achieve Global Partner<br /> ① Directly invite and activate 13500 users. <br /> ② Directly invite and activate 20 users, have 3 Team Partner in 3 different lines and reach 1500 users within your team. <br />Meet one of the two conditions to be promoted to Global Partner. <br /> Please note that only when meeting one of the two requirements will you be promoted.<br /><br />
                        The system will promote you automatically once you have reached the requirement.<br /> You will then enjoy the benefits of your new position. <br /> If you have any questions or need any assistance, please feel free to contact customer service.<br /><br />
                        Thank you for your support. <br /><br />Please enjoy!<br />  Thank You!


                    </span>
                    {/* <img className='span-img_l2' src={b15_1} alt="process images" /><br />
                    <span className="main-span_l2">2.Tap on the transaction record in the upper right corner.</span><br />
                    <img className='span-img_l2' src={b15_2} alt="process images" /><br />
                    <span className="main-span_l2">To ensure a smooth operation system, the system will delete transaction records every 3 months.</span><br /><br />
                    <span className="main-span_l2">How to find your profit records?</span><br /><br />
                    <span className="main-span_l2">1. Tap on the revenue details in Home page</span><br />
                    <img className='span-img_l2' src={b15_3} alt="process images" /><br />
                    <span className="main-span_l2">To ensure a smooth operation system, the system will delete profit records every 2 weeks.</span> */}
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
