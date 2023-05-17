import React from 'react';
import "./q10.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q10() {
    return (
        <>

            <div className='lmain-div_q10'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q10'>
                    <div className='main-head_q10'>Why is there an abnormal state</div>

                    <span className="main-span_q10">Q: Why is there an exception</span><br /><br />
                    <span className="main-span_q10">A: After the currency purchased by the robot is privately sold by the user on the exchange, and then the task is restarted, the robot cannot be sold after the purchase, and eventually the system order is abnormal, or the currency purchased by the robot is System exceptions may also occur in transfers, freezes, and fixed deposits. <br /><br /> In order to put an end to this kind of behavior, the research decided:<br /><br /> 1. If there is an abnormality, users who did not complete the sale on Royal Q, regardless of whether you are profitable or not, the system deducts 6% of the total value of the current abnormal order as fuel. If you use Royal Q for one-click liquidation operations, no fees will be deducted.<br /><br /> 2. If a user reaches the above violation operation for three or more times, the account will be permanently frozen and cannot be unblocked.<br /><br /> 3. This regulation will officially take effect on April 5, 2021. Please cherish your credit and use Royal Q quantitative trading tools reasonably.</span><br /><br />

                </div>

            </div>
        </>
    )
}

export default q10