import React from 'react';
import "./q15.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q15() {
    return (
        <>

            <div className='lmain-div_q15'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q15'>
                    <div className='main-head_q15'>Can bots run Huobi and Binance at the same time?</div>

                    <span className="main-span_q15">Q: Can bots run Huobi and Binance at the same time?</span><br /><br />
                    <span className="main-span_q15">A: Royal Q is a dual-system operation, so you can run Huobi and Binance Exchange at the same time without interfering with each other.</span><br /><br />

                </div>

            </div>
        </>
    )
}

export default q15