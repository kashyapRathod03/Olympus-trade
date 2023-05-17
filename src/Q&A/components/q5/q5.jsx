import React from 'react';
import "./q5.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q5() {
    return (
        <>

            <div className='lmain-div_q5'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q5'>
                    <div className='main-head_q5'>After I closed the position, I used partial liquidation. This order should have been profitable. Why</div>

                    <span className="main-span_q5">Q: I used the partial clearance function after I closed the position. This order should have been profitable. Why did the order show a loss?</span><br /><br />
                    <span className="main-span_q5">A: Partial clearance will not change the average price. Your sell order will show a loss because the selling price is lower than the average price. In fact, after you cover your position, when the market goes up, you will sell this part of the cover. Profit has helped you lower the average price!</span><br /><br />

                </div>

            </div>
        </>
    )
}

export default q5