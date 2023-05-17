import React from 'react';
import "./B17.css";
import Userguide from '../userguide/Userguide';
import Sidebar from '../Sidebar/Sidebar';
import OptionL from '../../../MainHelp/optionbar/Option';


function BinancePro() {

    return (
        <>
            <div className='bmain-div_b6'>
                <div className='side-section'>
                    <Userguide />
                </div>
                <div className="option_b1">
                    <OptionL/>
                </div>
                <Sidebar />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_b6'>
                    <div className='main-head_b6'>Unable to receieve the verfication email</div>
                    <span className="main-span_b6">Dear Royal Q users:</span><br /><br />
                    <span className="main-span_b6">If you do not see the verification email, please check the following:<br />
                        1. Please check the spam folder.<br />
                        2. Please check if you have sufficient storage space.<br />
                        3. Please add the verification email address to the whitelist and resend the verification email.<br /><br />
                        If you are still not able to receive the email after adding it to the whitelist, please contact the mail service support team.<br /><br />
                        Thank you for your support to Royal Q!<br />
                        Royal Q Operations Team<br />
                        https://royalqs.com<br />
                        October 17th, 2022</span>

                </div>

            </div>
        </>
    )
}

export default BinancePro
