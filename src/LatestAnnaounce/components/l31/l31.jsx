import React from 'react';
import "./l31.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarL from "../Sidebar/SidebarL"
function l1() {
    return (
        <>

            <div className='lmain-div_l31'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l31'>
                    <div className='main-head_l31'>V6 Bonus Assessment Suspended</div>

                    <span className="main-span_l31">Dear Royal Q users: </span><br /><br />
                    <span className="main-span_l31"> Starting from 1st of June, Royal Q will suspend V6 bonus assessments.<br /><br />
                        Originally, V6 must have 3 downline communities and each community will must profit over 50,000 USDT.<br />
                        After some adjustments, we will suspend the assessment for V6. As of 1st of June, all V6 members are entitled to receiving Global Activation Bonus and Quantitative Global Bonus.<br />
                        (activation global weighted bonus: each newly added user platform allocates 10 USDT into the weighted bonus, where the user reaches V6 level and cultivates 1 V6 level user under the umbrella can get the weighted qualification, cultivate 2 V6 users can get 2 shares of earnings, cultivate 3 V6 users can get 3 shares of earnings, and so on.) <br />

                        (Please be advised that Royal Q reserves the right to make the final adjustment of the event according to the market.) <br /><br />
                        Thank you for your support to Royal Q!</span>


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
