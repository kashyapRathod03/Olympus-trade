import React from 'react';
import "./q28.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q28() {
    return (
        <>

            <div className='lmain-div_q28'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q28'>
                    <div className='main-head_q28'>Why is the total amount bought different from the total amount sold?</div>

                    <span className="main-span_q28">Q: Why is the total amount bought different from the total amount sold?</span><br /><br />
                    <span className="main-span_q28">A: The exchange will deduct the purchased currency as a handling fee when buying, and the quantity when selling will be different. The handling fee when selling is USDT, so the quantity bought and the quantity sold will be inconsistent.</span>

                </div>

            </div>
        </>
    )
}

export default q28