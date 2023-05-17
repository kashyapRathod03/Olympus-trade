import React from 'react';
import "./l30.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarL from "../Sidebar/SidebarL"
function l30() {
    return (
        <>

            <div className='lmain-div_l30'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l30'>
                    <div className='main-head_l30'>Modify the mailbox/password/transaction password related matters</div>

                    <span className="main-span_l30">Dear Royal Q users: </span><br /><br />
                    <span className="main-span_l30"> Royal Q recently discovered that there are user accounts that were hacked.<br /> For the safety of your funds, we will limit withdrawal and transfer for 48 hours after users change their password/transaction password/E-mail. <br /> If you did not request to change your password/transaction password/E-mail, please contact customer service immediately. <br /> Please do not share the verification code sent to your email with anyone.<br /><br />  Royal Q also recommends that you use Google Authenticator to keep your account secure.</span>

                </div>

            </div>
        </>
    )
}

export default l30