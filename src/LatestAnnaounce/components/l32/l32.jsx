import React from 'react';
import "./l32.css";
import Latestanno from "../Latestanno/Latestanno"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarL from "../Sidebar/SidebarL"
function l32() {
    return (
        <>

            <div className='lmain-div_l32'>
                <div className='lside-section'>
                    <Latestanno />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarL />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_l32'>
                    <div className='main-head_l32'>Online customer service time adjustment</div>

                    <span className="main-span_l32">Respected user:<br /><br />
                      From now on, the customer service time will be adjusted to: 09:00 ~ 00:00 daily (UTC+8) <br /><br /> Royal Q Operations Team</span>
                    
                </div>

            </div>
        </>
    )
}

export default l32