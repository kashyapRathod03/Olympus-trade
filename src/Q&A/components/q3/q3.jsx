import React from 'react';
import "./q3.css";
import Q from "../Q and A/Q and A"
import Option from '../../../MainHelp/optionbar/Option';
import SidebarQ from "../SidebarQ/SidebarQ";
function q3() {
    return (
        <>

            <div className='lmain-div_q3'>
                <div className='lside-section'>
                    <Q />
                </div>
                <div className="option_b1">
                    <Option />
                </div>
                <SidebarQ />


                {/* side section end .....................................................................*/}
                {/* main section start */}

                <div className='main-section_q3'>
                    <div className='main-head_q3'>What does it mean to synchronous opening doubled</div>

                    <span className="main-span_q3">Q：What does it mean to synchronous opening doubled?</span><br /><br />
                    <span className="main-span_q3">A: Synchronous position opening doubling: After opening, if the owner's strategy is to open a position double, then the user will open a double position, if the owner's strategy does not open a position double, then the user will not open a double position!</span><br /><br />

                </div>

            </div>
        </>
    )
}

export default q3