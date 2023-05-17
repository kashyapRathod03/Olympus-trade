import React from 'react';
import "./l29.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarL from "../Sidebar/SidebarL"
function l29() {
    return (
        <>

            <div className='lmain-div_l29'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l29'>
                    <div className='main-head_l29'>Account Security Update</div>

                    <span className="main-span_l29">Dear Royal Q users: </span><br /><br />
                    <span className="main-span_l29">  To enforce the account security, Royal Q have added multiple features to protect your account. Also, for future account recovery, we have adapted a new account security feature.<br /> The answers for the questions cannot be changed. And it will become essential when you want to recover your account.<br /> Therefore, please answer the questions carefully and based on your own experience. <br />Due to account safety, customer service will not assist in changing verification emails after setting the account security feature.<br /><br /> Thank you for your cooperation and support.</span>

                </div>

            </div>
        </>
    )
}

export default l29
