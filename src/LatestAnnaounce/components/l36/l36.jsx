import React from 'react';
import "./l36.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarL from "../Sidebar/SidebarL"
function l36() {
    return (
        <>

            <div className='lmain-div_l36'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l36'>
                    <div className='main-head_l36'>Do not believe any false information about the migration and transfer accounts, leaking account pass</div>

                    <span className="main-span_l36">Dear Royal Q users: </span><br /><br />
                    <span className="main-span_l36"> Do not believe any false information about migration or transfer of accounts.<br /><br /> ROYAL Q will not require users to enter ROYAL Q related information and user qualification transfer operations on other websites at any time.<br /> Please ensure the safety of your information and avoid data leakage, so as not to cause loss. <br /><br /> Royal Q Operations Team
                    </span>

                </div>

            </div>
        </>
    )
}

export default l36