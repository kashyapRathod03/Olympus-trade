import React from 'react';
import "./q35.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q35() {
    return (
        <>

            <div className='lmain-div_q35'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q35'>
                    <div className='main-head_q35'>The robot prompts that the balance is insufficient</div>

                    <span className="main-span_q35">Q: The robot prompts that the balance is insufficient</span><br /><br />
                    <span className="main-span_q35">A: Please check whether the balance in the Royal Q account is sufficient. The robot fuel fee needs to be at least 10U to start, and the operation will stop if it is less than 2U.</span><br /><br />

                </div>

            </div>
        </>
    )
}

export default q35