import React from 'react';
import "./q9.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q9() {
    return (
        <>

            <div className='lmain-div_q9'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q9'>
                    <div className='main-head_q9'>I set the first pre-pending order, how do I cancel it?</div>

                    <span className="main-span_q9">Q: I set the first pre-pending order, how do I cancel it?</span><br /><br />
                    <span className="main-span_q9">A: I have set up my first pre-entry order, how do I cancel it?  ANS: You can click on the "First Pre-Pending Order" setting again, and then enter 0 and press OK to cancel</span><br /><br />

                </div>

            </div>
        </>
    )
}

export default q9