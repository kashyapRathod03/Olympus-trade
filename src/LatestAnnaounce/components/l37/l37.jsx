import React from 'react';
import "./l37.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarL from "../Sidebar/SidebarL"
function l37() {
    return (
        <>

            <div className='lmain-div_l37'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l37'>
                    <div className='main-head_l37'>The first order amount is adjusted to a minimum of 15USDT </div>

                    <span className="main-span_l37">Dear Royal Q users: </span><br /><br />
                    <span className="main-span_l37">Due to the adjustment of the currency trading precision of the exchange, to avoid the total transaction amount after the take profit does not reach the exchange’s minimum amount of 10USDT, resulting in failure to sell, the minimum adjustment of the first order amount is set to 15USDT.<br /><br />  Royal Q Operations Team</span>

                </div>

            </div>
        </>
    )
}

export default l37