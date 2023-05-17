import React from 'react';
import "./q8.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q8() {
    return (
        <>

            <div className='lmain-div_q8'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q8'>
                    <div className='main-head_q8'>Are my funds safe?</div>

                    <span className="main-span_q8">Q: Are my funds safe?</span><br /><br />
                    <span className="main-span_q8"> A: The operation of the Royal Q robot is performed on the exchange for you. Your funds are in Huobi or Binance. Royal Q cannot transfer your funds, but the robot will help you do it in Huobi or Binance. Buy low and sell high, arbitrage for you 24 hours a day!</span><br /><br />

                </div>

            </div>
        </>
    )
}

export default q8