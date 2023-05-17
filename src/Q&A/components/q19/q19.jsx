import React from 'react';
import "./q19.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q19() {
    return (
        <>

            <div className='lmain-div_q19'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q19'>
                    <div className='main-head_q19'>Order prompts abnormal operation</div>

                    <span className="main-span_q19">Q: Order prompts abnormal operation</span><br /><br />
                    <span className="main-span_q19">A: <br /><br /> 1. If the user did not complete the sale on Royal Q during the abnormal task, regardless of whether you are profitable or not, the system will deduct 6% of the total value of the current abnormal order as a fuel fee. If you use Royal Q for one-click liquidation operations, no fees will be deducted.<br /><br />
                        2. If a user has performed the above operations three times or more, the account will be permanently frozen and cannot be unblocked.
                    </span>

                </div>

            </div>
        </>
    )
}

export default q19