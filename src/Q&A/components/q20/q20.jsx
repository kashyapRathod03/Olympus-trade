import React from 'react';
import "./q20.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q20() {
    return (
        <>

            <div className='lmain-div_q20'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q20'>
                    <div className='main-head_q20'>Incorrect display of team data</div>

                    <span className="main-span_q20">Q: Incorrect display of team data</span><br /><br />
                    <span className="main-span_q20">A: The hourly statistical data adjustment part of the team data is: The two fields of today's total profit and accumulated profit in the reward details are displayed Direct push quantification and team quantification within the team</span><br /><br />

                </div>

            </div>
        </>
    )
}

export default q20